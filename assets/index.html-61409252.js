import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as c,c as o,d as p,a as n,b as s,e,f as i}from"./app-24572d8f.js";const d={},r=n("h1",{id:"在-windows-安裝-nginx-伺服器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在-windows-安裝-nginx-伺服器","aria-hidden":"true"},"#"),s(" 在 Windows 安裝 Nginx 伺服器")],-1),v=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),u=n("p",null,[s("有時候為了測試小網站又懶得弄個 Linux 環境，"),n("br"),s(" 那麼直接在 Windows 環境也是種選擇，"),n("br"),s(" 不用安裝只要下載就可以馬上使用惹。")],-1),m=n("h2",{id:"下載網頁伺服器-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下載網頁伺服器-nginx","aria-hidden":"true"},"#"),s(" 下載網頁伺服器 Nginx")],-1),k=n("h3",{id:"官網下載",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#官網下載","aria-hidden":"true"},"#"),s(" 官網下載")],-1),b={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},h=i('<p>選擇 <code>nginx/Windows-{version}</code> 版本</p><h3 id="解壓縮檔案" tabindex="-1"><a class="header-anchor" href="#解壓縮檔案" aria-hidden="true">#</a> 解壓縮檔案</h3><p>解壓縮到任意目錄</p><p>本次教學以 D 槽為解壓縮目的</p><h2 id="執行網頁伺服器-nginx" tabindex="-1"><a class="header-anchor" href="#執行網頁伺服器-nginx" aria-hidden="true">#</a> 執行網頁伺服器 Nginx</h2><p>到 D:\\nginx-{version} 內會看到 <code>nginx.exe</code></p><p>不用安裝就可以直接執行</p>',7),_={href:"http://127.0.0.1/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="設定網頁伺服器-nginx" tabindex="-1"><a class="header-anchor" href="#設定網頁伺服器-nginx" aria-hidden="true">#</a> 設定網頁伺服器 Nginx</h2><h3 id="設定備份" tabindex="-1"><a class="header-anchor" href="#設定備份" aria-hidden="true">#</a> 設定備份</h3><p>設定檔是 <code>nginx.conf</code></p><p>位置會在 <code>D:\\nginx-1.27.2\\conf\\nginx.conf</code></p><p>設定之前建議備份該檔案，改壞了有得救。</p><h3 id="參考設定檔" tabindex="-1"><a class="header-anchor" href="#參考設定檔" aria-hidden="true">#</a> 參考設定檔</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#user  nobody;</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


<span class="token directive"><span class="token keyword">events</span></span>
<span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token directive"><span class="token keyword">http</span></span>
<span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

	<span class="token comment"># 測試主頁</span>
    <span class="token directive"><span class="token keyword">server</span></span>
	<span class="token punctuation">{</span>
        <span class="token comment"># 指定處理請求的通訊埠</span>
		<span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>

		<span class="token comment"># 指定處理請求的主機名稱</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

		<span class="token comment"># 指定專案路徑</span>
		<span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>

		<span class="token comment"># 在 Content-Type 標頭中自動加上 charset 的設定值</span>
        <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>

		<span class="token comment"># log 路徑與名稱</span>
        <span class="token directive"><span class="token keyword">access_log</span>  logs/test.access.log</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">error_log</span>  logs/test.error.log</span><span class="token punctuation">;</span>

		<span class="token comment"># 預設首頁檔名</span>
		<span class="token directive"><span class="token keyword">location</span> /</span>
		<span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

		<span class="token comment"># 將伺服器錯誤頁面重定向到指定頁面</span>
        <span class="token directive"><span class="token keyword">error_page</span>  <span class="token number">403</span> <span class="token number">404</span>              /40x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">error_page</span>  <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span>
		<span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

	<span class="token comment"># 一般 PHP 檔案</span>
    <span class="token directive"><span class="token keyword">server</span></span>
	<span class="token punctuation">{</span>
        <span class="token comment"># 指定處理請求的通訊埠</span>
		<span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
		<span class="token comment"># 指定處理請求的主機名稱</span>
        <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.50</span><span class="token punctuation">;</span>

		<span class="token comment"># 指定專案路徑與預設首頁檔名</span>
		<span class="token directive"><span class="token keyword">root</span>           D:/test</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">index</span>  index.php

		<span class="token comment"># 在 Content-Type 標頭中自動加上 charset 的設定值</span>
        charset utf-8</span><span class="token punctuation">;</span>

		<span class="token comment"># log 路徑與名稱</span>
        <span class="token directive"><span class="token keyword">access_log</span>  logs/php.access.log</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">error_log</span>  logs/php.error.log</span><span class="token punctuation">;</span>

        <span class="token comment"># 通過 php-cgi 監聽的 port 來處理 PHP 檔案</span>
        <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span>
		<span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
			<span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

	<span class="token comment"># Laravel 9 參考設定</span>
	<span class="token directive"><span class="token keyword">server</span></span>
	<span class="token punctuation">{</span>
		<span class="token comment"># 指定處理請求的通訊埠</span>
		<span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
		<span class="token comment"># 指定處理請求的主機名稱</span>
		<span class="token directive"><span class="token keyword">server_name</span> 127.0.0.2</span><span class="token punctuation">;</span>

		<span class="token comment"># 將 root 視為一個入口，指到 Laravel 專案資料夾內的 public 資料夾</span>
		<span class="token directive"><span class="token keyword">root</span> D:/apply_front/public</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">index</span> index.php</span><span class="token punctuation">;</span>

		<span class="token comment"># 在 Content-Type 標頭中自動加上 charset 的設定值</span>
		<span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
 		<span class="token directive"><span class="token keyword">add_header</span> X-Frame-Options <span class="token string">&quot;SAMEORIGIN&quot;</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">add_header</span> X-Content-Type-Options <span class="token string">&quot;nosniff&quot;</span></span><span class="token punctuation">;</span>

		<span class="token comment"># 將所有的請求都交給 Laravel 的路由去處理，如 404 的頁面都是交由 Laravel 處理</span>
		<span class="token directive"><span class="token keyword">location</span> /</span>
		<span class="token punctuation">{</span>
			<span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.php?<span class="token variable">$query_string</span></span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token directive"><span class="token keyword">location</span> = /favicon.ico</span> <span class="token punctuation">{</span> <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
		<span class="token directive"><span class="token keyword">location</span> = /robots.txt</span>  <span class="token punctuation">{</span> <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token directive"><span class="token keyword">log_not_found</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

		<span class="token comment"># 將伺服器錯誤頁面重定向到指定頁面</span>
		<span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /index.php</span><span class="token punctuation">;</span>

		<span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span>
		<span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
			<span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token directive"><span class="token keyword">location</span> ~ /\\.(?!well-known).*</span>
		<span class="token punctuation">{</span>
			<span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

    <span class="token comment"># another virtual host using mix of IP-, name-, and port-based configuration</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       8000;</span>
    <span class="token comment">#    listen       somename:8080;</span>
    <span class="token comment">#    server_name  somename  alias  another.alias;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>


    <span class="token comment"># HTTPS server</span>
    <span class="token comment">#</span>
    <span class="token comment">#server {</span>
    <span class="token comment">#    listen       443 ssl;</span>
    <span class="token comment">#    server_name  localhost;</span>

    <span class="token comment">#    ssl_certificate      cert.pem;</span>
    <span class="token comment">#    ssl_certificate_key  cert.key;</span>

    <span class="token comment">#    ssl_session_cache    shared:SSL:1m;</span>
    <span class="token comment">#    ssl_session_timeout  5m;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

    <span class="token comment">#    location / {</span>
    <span class="token comment">#        root   html;</span>
    <span class="token comment">#        index  index.html index.htm;</span>
    <span class="token comment">#    }</span>
    <span class="token comment">#}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2>`,8),y={href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"},x=n("br",null,null,-1),w={href:"https://laravel.dev.org.tw/docs/11.x/deployment",target:"_blank",rel:"noopener noreferrer"};function f($,q){const a=l("ExternalLinkIcon");return c(),o("div",null,[r,v,u,p(" more "),m,k,n("p",null,[n("a",b,[s("官方下載頁面"),e(a)])]),h,n("p",null,[s("開啟瀏覽器輸入 "),n("a",_,[s("http://127.0.0.1/"),e(a)]),s(" 看到歡迎畫面代表成功")]),g,n("p",null,[n("a",y,[s("Nginx 開源官方網站"),e(a)]),x,n("a",w,[s("Laravel 官方文件 - 部署"),e(a)])])])}const I=t(d,[["render",f],["__file","index.html.vue"]]);export{I as default};
