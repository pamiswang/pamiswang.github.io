import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as p,a as n,b as s,e,f as l}from"./app-6c34ed1d.js";const o={},r=n("h1",{id:"設定-nginx-用於-php-專案的基本設定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#設定-nginx-用於-php-專案的基本設定","aria-hidden":"true"},"#"),s(" 設定 Nginx 用於 php 專案的基本設定")],-1),d=n("h2",{id:"可參考設定檔產生網站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可參考設定檔產生網站","aria-hidden":"true"},"#"),s(" 可參考設定檔產生網站")],-1),v={href:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhTW",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="適用版本" tabindex="-1"><a class="header-anchor" href="#適用版本" aria-hidden="true">#</a> 適用版本</h2><p><code>nginx version: nginx/1.22.1</code></p><h2 id="基本設定" tabindex="-1"><a class="header-anchor" href="#基本設定" aria-hidden="true">#</a> 基本設定</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 設定監聽的 port</span>
    <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 定義伺服器名稱</span>
    <span class="token directive"><span class="token keyword">server_name</span>     ndc5gsc-demo.tca.com.tw</span><span class="token punctuation">;</span>
    <span class="token comment"># 設定專案資料夾</span>
    <span class="token directive"><span class="token keyword">root</span>            /home/tca/ndc5gsc</span><span class="token punctuation">;</span>
    <span class="token comment"># 指定初始頁面</span>
    <span class="token directive"><span class="token keyword">index</span>           index.php</span><span class="token punctuation">;</span>

    <span class="token comment"># 將服務器錯誤頁面重定向到靜態頁面 /50x.html</span>
    <span class="token directive"><span class="token keyword">error_page</span>  <span class="token number">404</span>              /404.html</span><span class="token punctuation">;</span>

    <span class="token comment"># 將服務器錯誤頁面重定向到靜態頁面 /50x.html</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 將 PHP 腳本轉送給 FastCGI 服務器</span>
    <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
        <span class="token comment"># 腳本文件請求路徑</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span>   SCRIPT_FILENAME     <span class="token variable">$realpath_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
        <span class="token comment"># 指定用來解譯 PHP 程式的端口</span>
	    <span class="token comment"># With php-fpm (or other unix sockets):</span>
        <span class="token directive"><span class="token keyword">fastcgi_pass</span>    unix:/var/run/php/php7.4-fpm.sock</span><span class="token punctuation">;</span>
		<span class="token comment"># With php-cgi (or other tcp sockets):</span>
		<span class="token comment"># fastcgi_pass 127.0.0.1:9000;</span>
        <span class="token comment"># 載入預設的 fastcgi 設定</span>
        <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本設定-ssl" tabindex="-1"><a class="header-anchor" href="#基本設定-ssl" aria-hidden="true">#</a> 基本設定 - SSL</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 設定監聽的 port</span>
    <span class="token directive"><span class="token keyword">listen</span>                  <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token comment"># 定義伺服器名稱</span>
    <span class="token directive"><span class="token keyword">server_name</span>             ndc5gsc-demo.tca.com.tw</span><span class="token punctuation">;</span>

    <span class="token comment"># SSL 設定</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span>           TLSv1 TLSv1.1 TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_ciphers</span>             AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>         /usr/share/ca-certificates/server.crt</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span>     /usr/share/ca-certificates/server.key</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_session_cache</span>       shared:SSL:10m</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_session_timeout</span>     <span class="token number">10m</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 設定專案資料夾</span>
    <span class="token directive"><span class="token keyword">root</span>                    /home/tca/ndc5gsc</span><span class="token punctuation">;</span>

    <span class="token comment"># 指定初始頁面</span>
    <span class="token directive"><span class="token keyword">index</span>                   index.php</span><span class="token punctuation">;</span>

    <span class="token comment"># 將服務器錯誤頁面重定向到靜態頁面 /50x.html</span>
    <span class="token directive"><span class="token keyword">error_page</span>  <span class="token number">404</span>              /404.html</span><span class="token punctuation">;</span>

    <span class="token comment"># 將服務器錯誤頁面重定向到靜態頁面 /50x.html</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 將 PHP 腳本轉送給 FastCGI 服務器</span>
    <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
        <span class="token comment"># 腳本文件請求路徑</span>
        <span class="token directive"><span class="token keyword">fastcgi_param</span>   SCRIPT_FILENAME     <span class="token variable">$realpath_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
        <span class="token comment"># 指定用來解譯 PHP 程式的端口</span>
	    <span class="token comment"># With php-fpm (or other unix sockets):</span>
        <span class="token directive"><span class="token keyword">fastcgi_pass</span>    unix:/var/run/php/php7.4-fpm.sock</span><span class="token punctuation">;</span>
		<span class="token comment"># With php-cgi (or other tcp sockets):</span>
		<span class="token comment"># fastcgi_pass 127.0.0.1:9000;</span>
        <span class="token comment"># 載入預設的 fastcgi 設定</span>
        <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># HTTP 轉址</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># 設定監聽的 port</span>
    <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 定義伺服器名稱</span>
    <span class="token directive"><span class="token keyword">server_name</span>     ndc5gsc-demo.tca.com.tw</span><span class="token punctuation">;</span>
    <span class="token comment"># 轉址重定向的網址</span>
    <span class="token directive"><span class="token keyword">return</span>          https://ndc5gsc-demo.tca.com.tw<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,7),m={href:"https://nginx.org/en/docs/http/ngx_http_ssl_module.html",target:"_blank",rel:"noopener noreferrer"};function k(b,h){const a=t("ExternalLinkIcon");return c(),p("div",null,[r,d,n("p",null,[n("a",v,[s("https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhTW"),e(a)])]),u,n("p",null,[n("a",m,[s("https://nginx.org/en/docs/http/ngx_http_ssl_module.html"),e(a)])])])}const x=i(o,[["render",k],["__file","index.html.vue"]]);export{x as default};
