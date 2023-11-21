import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,d as i,a as n,b as a,f as l}from"./app-a75af3cc.js";const c={},p=n("h1",{id:"php-常用設定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-常用設定","aria-hidden":"true"},"#"),a(" PHP 常用設定")],-1),o=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1),d=n("p",null,"因為常常用到就記錄一下。",-1),r=l(`<h2 id="修改設定檔" tabindex="-1"><a class="header-anchor" href="#修改設定檔" aria-hidden="true">#</a> 修改設定檔</h2><p>如果是安裝在 Ubuntu 系統，預設路徑可參考以下。</p><p><code>/etc/php/7.4/fpm/php.ini</code><br><code>/etc/php/8.1/fpm/php.ini</code></p><h2 id="修改項目" tabindex="-1"><a class="header-anchor" href="#修改項目" aria-hidden="true">#</a> 修改項目</h2><h3 id="調整擴充模組的-extension-註解-可參考" tabindex="-1"><a class="header-anchor" href="#調整擴充模組的-extension-註解-可參考" aria-hidden="true">#</a> 調整擴充模組的 extension 註解 可參考</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">bz2</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">curl</span>
<span class="token comment">; extension=ffi</span>
<span class="token comment">; extension=ftp</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">fileinfo</span>
<span class="token comment">; extension=gd</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">gettext</span>
<span class="token comment">; extension=gmp</span>
<span class="token comment">; extension=intl</span>
<span class="token comment">; extension=imap</span>
<span class="token comment">; extension=ldap</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">mbstring</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">exif      ; Must be after mbstring as it depends on it</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">mysqli</span>
<span class="token comment">; extension=oci8_12c  ; Use with Oracle Database 12c Instant Client</span>
<span class="token comment">; extension=oci8_19  ; Use with Oracle Database 19 Instant Client</span>
<span class="token comment">; extension=odbc</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">openssl</span>
<span class="token comment">; extension=pdo_firebird</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">pdo_mysql</span>
<span class="token comment">; extension=pdo_oci</span>
<span class="token comment">; extension=pdo_odbc</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">pdo_pgsql</span>
<span class="token key attr-name">extension</span><span class="token punctuation">=</span><span class="token value attr-value">pdo_sqlite</span>
<span class="token comment">; extension=pgsql</span>
<span class="token comment">; extension=shmop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改時區" tabindex="-1"><a class="header-anchor" href="#修改時區" aria-hidden="true">#</a> 修改時區</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">date.timezone</span> <span class="token punctuation">=</span> <span class="token value attr-value">Asia/Taipei</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="上傳檔案大小限制" tabindex="-1"><a class="header-anchor" href="#上傳檔案大小限制" aria-hidden="true">#</a> 上傳檔案大小限制</h3><p>放寬檔案上傳大小相關的設定：記憶體用量上限 &gt; POST 大小上限 &gt; 上傳檔案大小上限。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; 上傳檔案大小上限（單一檔案大小）</span>
<span class="token key attr-name">upload_max_filesize</span> <span class="token punctuation">=</span> <span class="token value attr-value">50M</span>
<span class="token comment">; POST 大小上限（所有檔案大小加總）</span>
<span class="token key attr-name">post_max_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">200M</span>
<span class="token comment">; 記憶體用量上限</span>
<span class="token key attr-name">memory_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">512M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="執行時間設定" tabindex="-1"><a class="header-anchor" href="#執行時間設定" aria-hidden="true">#</a> 執行時間設定</h3><p>上傳大型檔案通常都會需要比較久的時間，為了避免逾時需要調整執行時間。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; PHP 指令稿執行時間上限（秒）</span>
<span class="token key attr-name">max_execution_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>
<span class="token comment">; PHP 指令稿解析輸入資料時間上限（秒）</span>
<span class="token key attr-name">max_input_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若擔心網路不穩造成傳大檔案時容易斷線的話，可以嘗試將 socket 等待逾時的設定調大一點。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; socket 等待逾時（秒）</span>
<span class="token key attr-name">default_socket_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>若有使用 MySQL 資料庫的連線，可以修改一下 MySQL 連線逾時的設定，避免上傳檔案等待太久，造成資料庫連線中斷：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; MySQL 資料庫連線逾時（秒，-1 代表永不斷線）</span>
<span class="token key attr-name">mysql.connect_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否給-cookie-加上-httponly-標誌" tabindex="-1"><a class="header-anchor" href="#是否給-cookie-加上-httponly-標誌" aria-hidden="true">#</a> 是否給 cookie 加上 httpOnly 標誌</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">session.cookie_httponly</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改充檔案的資料夾目錄" tabindex="-1"><a class="header-anchor" href="#修改充檔案的資料夾目錄" aria-hidden="true">#</a> 修改充檔案的資料夾目錄</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; extension_dir = &quot;ext&quot;</span>
<span class="token key attr-name">extension_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">D:\\WNMP\\php-8.1.5-nts-Win32-vs16-x64\\ext</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他修改" tabindex="-1"><a class="header-anchor" href="#其他修改" aria-hidden="true">#</a> 其他修改</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">; 僅適用 Apache 伺服器 是否啟用動態載入模組功能</span>
<span class="token key attr-name">enable_dl</span> <span class="token punctuation">=</span> <span class="token value attr-value">On</span>
<span class="token comment">; 與 $_SERVER[&#39;PATH_INFO&#39;] 變數取值功能有關</span>
<span class="token key attr-name">cgi.fix_pathinfo</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment">; 可防止任何人使用 URL 直接調用 PHP</span>
<span class="token key attr-name">cgi.force_redirect</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment">; 設定 PHP 是否傳送 RFC 2616 相容的報頭</span>
<span class="token key attr-name">cgi.rfc2616_headers</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment">; 使IIS的FastCGI模擬應用程式的安全金鑰</span>
<span class="token key attr-name">fastcgi.impersonate</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function u(v,m){return e(),t("div",null,[p,o,d,i(" more "),r])}const b=s(c,[["render",u],["__file","index.html.vue"]]);export{b as default};
