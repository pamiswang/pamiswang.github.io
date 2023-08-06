import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as d,a as e,b as n,e as i,f as r}from"./app-cad7e062.js";const p={},c=e("h1",{id:"php",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#php","aria-hidden":"true"},"#"),n(" PHP")],-1),h=e("h2",{id:"下載",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下載","aria-hidden":"true"},"#"),n(" 下載")],-1),l=e("p",null,"官網下載",-1),x={href:"https://windows.php.net/download/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"目前專案使用版本",-1),_=e("p",null,"8.1.10 VS16 x64 Non Thread Safe",-1),b={href:"https://windows.php.net/downloads/releases/php-8.1.10-nts-Win32-vs16-x64.zip",target:"_blank",rel:"noopener noreferrer"},g=r(`<h2 id="解壓縮檔案" tabindex="-1"><a class="header-anchor" href="#解壓縮檔案" aria-hidden="true">#</a> 解壓縮檔案</h2><p>解壓縮到 D:\\WNMP</p><h2 id="設定" tabindex="-1"><a class="header-anchor" href="#設定" aria-hidden="true">#</a> 設定</h2><p>複製 php-ini-development 並將檔名修改為 php.ini<br> php-ini-development<br> D:\\WNMP\\php-8.1.10-nts-Win32-vs16-x64\\php-ini-development<br> D:\\WNMP\\php-8.1.10-nts-Win32-vs16-x64\\php-ini</p><h3 id="修改設定檔案" tabindex="-1"><a class="header-anchor" href="#修改設定檔案" aria-hidden="true">#</a> 修改設定檔案</h3><pre><code>修改為PHP擴充檔案的資料夾目錄
extension_dir = &quot;ext&quot;

enable_dl = On
cgi.fix_pathinfo=1
cgi.force_redirect = 1
cgi.rfc2616_headers = 1
fastcgi.impersonate = 1
date.timezone = Asia/Taipei
</code></pre><h3 id="調整擴充模組的-extension-註解-可參考" tabindex="-1"><a class="header-anchor" href="#調整擴充模組的-extension-註解-可參考" aria-hidden="true">#</a> 調整擴充模組的 extension 註解 可參考</h3><pre><code>extension=bz2
extension=curl
;extension=ffi
;extension=ftp
extension=fileinfo
;extension=gd
extension=gettext
;extension=gmp
;extension=intl
;extension=imap
;extension=ldap
extension=mbstring
extension=exif      ; Must be after mbstring as it depends on it
extension=mysqli
;extension=oci8_12c  ; Use with Oracle Database 12c Instant Client
;extension=oci8_19  ; Use with Oracle Database 19 Instant Client
;extension=odbc
extension=openssl
;extension=pdo_firebird
extension=pdo_mysql
;extension=pdo_oci
;extension=pdo_odbc
;extension=pdo_pgsql
extension=pdo_sqlite
;extension=pgsql
;extension=shmop
</code></pre><h3 id="開啟-php-cgi" tabindex="-1"><a class="header-anchor" href="#開啟-php-cgi" aria-hidden="true">#</a> 開啟 php-cgi</h3><pre><code>cd D:\\WNMP\\php-8.1.10-nts-Win32-vs16-x64
php-cgi -b 127.0.0.1:9000
</code></pre><h2 id="設定環境變數" tabindex="-1"><a class="header-anchor" href="#設定環境變數" aria-hidden="true">#</a> 設定環境變數</h2><p>設定環境變數後才能在終端機用  <code>php</code>  指令</p><p>點  <code>進階</code>，之後點  <code>環境變數</code></p><figure><img src="https://t9009032722.p.clickup-attachments.com/t9009032722/94007a0e-2756-417c-a7fb-8181b5c747b7/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>找到  <code>path</code>  後，點一下，再按  <code>編輯</code> ，將路徑貼上</p><figure><img src="https://t9009032722.p.clickup-attachments.com/t9009032722/d153f49d-bbd2-453e-8fab-50db1562bb9d/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>按  <code>新增</code>，把剛剛解壓縮的資料夾路徑貼進去按  <code>Enter</code></p><figure><img src="https://t9009032722.p.clickup-attachments.com/t9009032722/08af9d96-40a6-415b-b495-cd5cdaa9536a/image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="測試安裝" tabindex="-1"><a class="header-anchor" href="#測試安裝" aria-hidden="true">#</a> 測試安裝</h2><p>在 cmd 內輸入</p><pre><code>php -v
</code></pre><p>看到版本號碼代表成功</p><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,23),m={href:"https://ithelp.ithome.com.tw/articles/10264432",target:"_blank",rel:"noopener noreferrer"};function u(w,v){const t=o("ExternalLinkIcon");return s(),d("div",null,[c,h,l,e("p",null,[e("a",x,[n("https://windows.php.net/download/"),i(t)])]),f,_,e("p",null,[e("a",b,[n("https://windows.php.net/downloads/releases/php-8.1.10-nts-Win32-vs16-x64.zip"),i(t)])]),g,e("p",null,[e("a",m,[n("https://ithelp.ithome.com.tw/articles/10264432"),i(t)])])])}const W=a(p,[["render",u],["__file","index.html.vue"]]);export{W as default};
