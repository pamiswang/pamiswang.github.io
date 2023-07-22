import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as o,a,b as i,e as d,f as e}from"./app-7fb195d3.js";const l={},c=e('<h1 id="laravel-開發環境安裝" tabindex="-1"><a class="header-anchor" href="#laravel-開發環境安裝" aria-hidden="true">#</a> Laravel 開發環境安裝</h1><h2 id="安裝-nginx" tabindex="-1"><a class="header-anchor" href="#安裝-nginx" aria-hidden="true">#</a> [ 安裝 Nginx ]</h2><p>[[install_ubuntu_nginx_1.22.1]]</p><h2 id="安裝-php-8-1" tabindex="-1"><a class="header-anchor" href="#安裝-php-8-1" aria-hidden="true">#</a> [ 安裝 PHP 8.1 ]</h2><p>[[install_ubuntu_php_8]]</p><h2 id="安裝-mariadb" tabindex="-1"><a class="header-anchor" href="#安裝-mariadb" aria-hidden="true">#</a> [ 安裝 MariaDB ]</h2><p>[[install_ubuntu_mariaDB]]</p><h2 id="安裝-composer" tabindex="-1"><a class="header-anchor" href="#安裝-composer" aria-hidden="true">#</a> [ 安裝 composer ]</h2><p>[[install_ubuntu_composer]]</p><h2 id="安裝-node-js" tabindex="-1"><a class="header-anchor" href="#安裝-node-js" aria-hidden="true">#</a> [ 安裝 node.js ]</h2><p>[[install_ubuntu_node]]</p><h2 id="安裝-git" tabindex="-1"><a class="header-anchor" href="#安裝-git" aria-hidden="true">#</a> [ 安裝 git ]</h2><p>[[setting_git]]</p><h2 id="安裝-github-desktop" tabindex="-1"><a class="header-anchor" href="#安裝-github-desktop" aria-hidden="true">#</a> [ 安裝 github desktop ]</h2>',14),p={href:"https://gist.github.com/berkorbay/6feda478a00b0432d13f1fc0a50467f1",target:"_blank",rel:"noopener noreferrer"},h=e(`<h2 id="參考-laravel-9-官方的設定檔" tabindex="-1"><a class="header-anchor" href="#參考-laravel-9-官方的設定檔" aria-hidden="true">#</a> [ 參考 laravel 9 官方的設定檔 ]</h2><pre><code>server {
	# listen 設定這個 server 監聽的 port
    listen 80;
    listen [::]:80;
    server_name 127.0.0.1 ;
	# 將 root 視為一個入口，指到 Laravel 專案資料夾內的 public 資料夾
    root /home/pamis/apluspms-laravel/public;

    add_header X-Frame-Options &quot;SAMEORIGIN&quot;;
    add_header X-Content-Type-Options &quot;nosniff&quot;;

    index index.php;

    charset utf-8;
	# 將所有的請求都交給 Laravel 的路由去處理，因此如 404 的頁面都是交由 Laravel 處理
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;
	# 所有 .php 的檔案交由 php-fpm 去做解析，注意對應的PHP版本
    location ~ \\.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\\.(?!well-known).* {
        deny all;
    }
}
</code></pre><h2 id="laravel-log-權限不足問題" tabindex="-1"><a class="header-anchor" href="#laravel-log-權限不足問題" aria-hidden="true">#</a> [ Laravel log 權限不足問題 ]</h2><p>先取得目錄所有權(適用於 nginx 1.19 以下)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token environment constant">$USER</span>:www-data storage
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token environment constant">$USER</span>:www-data bootstrap/cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再設定目錄的訪問權限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">775</span> storage
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">775</span> bootstrap/cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function u(f,b){const n=r("ExternalLinkIcon");return t(),o("div",null,[c,a("p",null,[a("a",p,[i("https://gist.github.com/berkorbay/6feda478a00b0432d13f1fc0a50467f1"),d(n)])]),h])}const v=s(l,[["render",u],["__file","index.html.vue"]]);export{v as default};
