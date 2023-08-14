import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as t,a as n,b as i,e as s,f as d}from"./app-f2b75bbf.js";const v={},c=d('<h1 id="安裝-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-nginx" aria-hidden="true">#</a> 安裝 Nginx</h1><h2 id="安裝-網頁伺服器-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-網頁伺服器-nginx" aria-hidden="true">#</a> [ 安裝 網頁伺服器 Nginx ]</h2><h5 id="官網下載" tabindex="-1"><a class="header-anchor" href="#官網下載" aria-hidden="true">#</a> 官網下載</h5>',3),o={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},u=n("h5",{id:"目前專案使用版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目前專案使用版本","aria-hidden":"true"},"#"),i(" 目前專案使用版本")],-1),m=n("h5",{id:"nginx-windows-1-23-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-windows-1-23-2","aria-hidden":"true"},"#"),i(" nginx/Windows-1.23.2")],-1),b={href:"http://nginx.org/download/nginx-1.23.2.zip",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"解壓縮檔案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解壓縮檔案","aria-hidden":"true"},"#"),i(" 解壓縮檔案")],-1),_=n("p",null,"解壓縮到 D:\\WNMP",-1),p=n("h2",{id:"測試安裝",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#測試安裝","aria-hidden":"true"},"#"),i(" 測試安裝")],-1),g={id:"執行-nginx-exe-後-開啟瀏覽器輸入-http-127-0-0-1-看到歡迎畫面代表成功",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#執行-nginx-exe-後-開啟瀏覽器輸入-http-127-0-0-1-看到歡迎畫面代表成功","aria-hidden":"true"},"#",-1),f={href:"http://127.0.0.1/",target:"_blank",rel:"noopener noreferrer"},w=d(`<h2 id="nginx-設定" tabindex="-1"><a class="header-anchor" href="#nginx-設定" aria-hidden="true">#</a> [ Nginx 設定 ]</h2><h5 id="設定之前建議備份該檔案" tabindex="-1"><a class="header-anchor" href="#設定之前建議備份該檔案" aria-hidden="true">#</a> 設定之前建議備份該檔案</h5><pre><code>nginx.conf
D:\\WNMP\\nginx-1.23.1\\conf\\nginx.conf
</code></pre><h5 id="可參考此設定範例" tabindex="-1"><a class="header-anchor" href="#可參考此設定範例" aria-hidden="true">#</a> 可參考此設定範例</h5><h3 id="參考設定檔" tabindex="-1"><a class="header-anchor" href="#參考設定檔" aria-hidden="true">#</a> 參考設定檔</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events
{
    worker_connections  1024;
}


http
{
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

	# 測試主頁
    server
	{
        # 指定處理請求的通訊埠
		listen       80;

		# 指定處理請求的主機名稱
        server_name  localhost;

		# 指定專案路徑
		root   html;

		# 在 Content-Type 標頭中自動加上 charset 的設定值
        charset utf-8;

		# log 路徑與名稱
        access_log  logs/test.access.log;
		error_log  logs/test.error.log;

		# 預設首頁檔名
		location /
		{
            index  index.html index.htm;
        }

		# 將伺服器錯誤頁面重定向到指定頁面
        error_page  403 404              /40x.html;
        error_page  500 502 503 504  /50x.html;
        location = /50x.html
		{
            root   html;
        }
    }

	# 一般 PHP 檔案
    server
	{
        # 指定處理請求的通訊埠
		listen       80;
		# 指定處理請求的主機名稱
        server_name  127.0.0.50;

		# 指定專案路徑與預設首頁檔名
		root           D:/test;
		index  index.php

		# 在 Content-Type 標頭中自動加上 charset 的設定值
        charset utf-8;

		# log 路徑與名稱
        access_log  logs/php.access.log;
		error_log  logs/php.error.log;

        # 通過 php-cgi 監聽的 port 來處理 PHP 檔案
        location ~ \\.php$
		{
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
			fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
    }

	# Laravel 9 參考設定
	server
	{
		# 指定處理請求的通訊埠
		listen 80;
		# 指定處理請求的主機名稱
		server_name 127.0.0.2;

		# 將 root 視為一個入口，指到 Laravel 專案資料夾內的 public 資料夾
		root D:/apply_front/public;
		index index.php;

		# 在 Content-Type 標頭中自動加上 charset 的設定值
		charset utf-8;
 		add_header X-Frame-Options &quot;SAMEORIGIN&quot;;
		add_header X-Content-Type-Options &quot;nosniff&quot;;

		# 將所有的請求都交給 Laravel 的路由去處理，如 404 的頁面都是交由 Laravel 處理
		location /
		{
			try_files $uri $uri/ /index.php?$query_string;
		}

		location = /favicon.ico { access_log off; log_not_found off; }
		location = /robots.txt  { access_log off; log_not_found off; }

		# 將伺服器錯誤頁面重定向到指定頁面
		error_page 404 /index.php;

		location ~ \\.php$
		{
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
			fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include        fastcgi_params;
		}

		location ~ /\\.(?!well-known).*
		{
			deny all;
		}
	}

    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,7),k={href:"https://www.nginx.com/resources/wiki/start/topics/examples/phpfastcgionwindows/",target:"_blank",rel:"noopener noreferrer"},$=n("br",null,null,-1),y={href:"https://docs.cornch.dev/zh-tw/laravel/9.x/deployment",target:"_blank",rel:"noopener noreferrer"};function q(N,L){const e=r("ExternalLinkIcon");return a(),t("div",null,[c,n("p",null,[n("a",o,[i("http://nginx.org/en/download.html"),s(e)])]),u,m,n("p",null,[n("a",b,[i("http://nginx.org/download/nginx-1.23.2.zip"),s(e)])]),h,_,p,n("h5",g,[x,i(" 執行 nginx.exe 後 開啟瀏覽器輸入 "),n("a",f,[i("http://127.0.0.1/"),s(e)]),i(" 看到歡迎畫面代表成功")]),w,n("p",null,[n("a",k,[i("https://www.nginx.com/resources/wiki/start/topics/examples/phpfastcgionwindows/"),s(e)]),$,n("a",y,[i("https://docs.cornch.dev/zh-tw/laravel/9.x/deployment"),s(e)])])])}const T=l(v,[["render",q],["__file","index.html.vue"]]);export{T as default};
