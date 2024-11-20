import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as i,a as e,b as n,e as t,f as a}from"./app-e55797fa.js";const h={},c=a(`<h1 id="作業系統安裝" tabindex="-1"><a class="header-anchor" href="#作業系統安裝" aria-hidden="true">#</a> 作業系統安裝</h1><p>[[install_ubuntu_22.04]]</p><h1 id="開發環境安裝" tabindex="-1"><a class="header-anchor" href="#開發環境安裝" aria-hidden="true">#</a> 開發環境安裝</h1><p>盡量照順序做</p><h2 id="安裝-網頁伺服器-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-網頁伺服器-nginx" aria-hidden="true">#</a> [ 安裝 網頁伺服器 Nginx ]</h2><pre><code>sudo apt update
sudo apt install nginx
</code></pre><h2 id="安裝-net-6-sdk" tabindex="-1"><a class="header-anchor" href="#安裝-net-6-sdk" aria-hidden="true">#</a> [ 安裝 .NET 6 SDK ]</h2><pre><code>sudo apt-get update
sudo apt-get install -y dotnet-sdk-6.0
</code></pre><h1 id="透過-kestrel-啟動專案服務" tabindex="-1"><a class="header-anchor" href="#透過-kestrel-啟動專案服務" aria-hidden="true">#</a> 透過 Kestrel 啟動專案服務</h1><p>指定專案發佈目錄並輸入指令</p><pre><code>dotnet [project_name].dll
</code></pre>`,11),l={href:"http://localhost:5000",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"nginx-設定",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-設定","aria-hidden":"true"},"#"),n(" [ Nginx 設定 ]")],-1),u={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>Nginx 設定可以至 /etc/nginx/site-available/ 這個資料夾內的 default 進行設定，<br> 通常一台機器內若有架設多個網站，可以利用多個設定檔方便區分不同網域或服務。</p><h3 id="設定檔的路徑-建議先將-default-另存一個-default-old" tabindex="-1"><a class="header-anchor" href="#設定檔的路徑-建議先將-default-另存一個-default-old" aria-hidden="true">#</a> 設定檔的路徑，建議先將 default 另存一個 default_old</h3><pre><code>/etc/nginx/sites-available/default
</code></pre><h3 id="參考-msdn-官方的設定檔" tabindex="-1"><a class="header-anchor" href="#參考-msdn-官方的設定檔" aria-hidden="true">#</a> 參考 MSDN 官方的設定檔</h3><pre><code>server {
    listen        80;
    server_name   example.com *.example.com;
    location / {
        proxy_pass         http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
</code></pre><h3 id="設定完成後-需要將這個設定檔連結至-site-enabled" tabindex="-1"><a class="header-anchor" href="#設定完成後-需要將這個設定檔連結至-site-enabled" aria-hidden="true">#</a> 設定完成後，需要將這個設定檔連結至 site-enabled</h3><pre><code>sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
</code></pre><h3 id="確認-nginx-是否連接成功" tabindex="-1"><a class="header-anchor" href="#確認-nginx-是否連接成功" aria-hidden="true">#</a> 確認 Nginx 是否連接成功</h3><pre><code>sudo nginx -t
</code></pre><h3 id="得到這個消息後便可重啟-nginx" tabindex="-1"><a class="header-anchor" href="#得到這個消息後便可重啟-nginx" aria-hidden="true">#</a> 得到這個消息後便可重啟 Nginx</h3><pre><code>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
</code></pre><h3 id="重啟-nginx" tabindex="-1"><a class="header-anchor" href="#重啟-nginx" aria-hidden="true">#</a> 重啟 Nginx</h3><pre><code>sudo service nginx restart
</code></pre><h2 id="kestrel-建立服務" tabindex="-1"><a class="header-anchor" href="#kestrel-建立服務" aria-hidden="true">#</a> [ Kestrel 建立服務 ]</h2><h3 id="建立服務定義檔" tabindex="-1"><a class="header-anchor" href="#建立服務定義檔" aria-hidden="true">#</a> 建立服務定義檔</h3><pre><code>sudo nano /etc/systemd/system/kestrel.service
</code></pre><h3 id="服務定義檔內容" tabindex="-1"><a class="header-anchor" href="#服務定義檔內容" aria-hidden="true">#</a> 服務定義檔內容</h3><pre><code>[Unit]
Description=Example .NET Web API App running on Ubuntu

[Service]
# 指向專案目錄
WorkingDirectory=/home/pamis/DEV_API
# 指向專案執行檔案
ExecStart=/usr/bin/dotnet /home/pamis/DEV_API/DEV_API.dll
# 指向專案執行檔案 並指定 位址與埠號
# ExecStart=/usr/bin/dotnet /home/pamis/DEV_API/DEV_API.dll --url http://0.0.0.0:5000
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=dotnet-example
# 管理服務的使用者
User=root
# User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
</code></pre><h3 id="設好服務後註冊並啟動服務" tabindex="-1"><a class="header-anchor" href="#設好服務後註冊並啟動服務" aria-hidden="true">#</a> 設好服務後註冊並啟動服務</h3><p>設好 kestrel.service 後註冊並啟動服務</p><pre><code>sudo systemctl enable kestrel.service
sudo systemctl start kestrel.service
sudo systemctl status kestrel.service
</code></pre><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,22),_={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.microsoft.com/zh-tw/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-6.0",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"[ 在 Ubuntu 上安裝 .NET SDK ]",-1),b={href:"https://docs.microsoft.com/zh-tw/dotnet/core/install/linux-ubuntu",target:"_blank",rel:"noopener noreferrer"},m={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},E={href:"https://blog.darkthread.net/blog/aspnetcore-with-nginx/",target:"_blank",rel:"noopener noreferrer"};function N(k,v){const r=d("ExternalLinkIcon");return s(),i("div",null,[c,e("p",null,[n("預設會以 "),e("a",l,[n("http://localhost:5000"),t(r)]),n(" 開啟")]),p,e("p",null,[n("以 Nginx 設定反向代理 將 HTTP 要求轉送至您的 "),e("a",u,[n("ASP.NET"),t(r)]),n(" Core 應用程式")]),x,e("p",null,[n("[ 在 Linux 上使用 Nginx 裝載 "),e("a",_,[n("ASP.NET"),t(r)]),n(" Core ]")]),e("p",null,[e("a",f,[n("https://docs.microsoft.com/zh-tw/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-6.0"),t(r)])]),g,e("p",null,[e("a",b,[n("https://docs.microsoft.com/zh-tw/dotnet/core/install/linux-ubuntu"),t(r)])]),e("p",null,[n("["),e("a",m,[n("ASP.NET"),t(r)]),n(" Core + Nginx on CentOS 安裝筆記]")]),e("p",null,[e("a",E,[n("https://blog.darkthread.net/blog/aspnetcore-with-nginx/"),t(r)])])])}const T=o(h,[["render",N],["__file","index.html.vue"]]);export{T as default};
