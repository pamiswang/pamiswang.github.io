import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as r,d,a as n,b as a,e,f as t}from"./app-24572d8f.js";const l={},p=t('<h1 id="在-ubuntu-安裝-mariadb-資料庫" tabindex="-1"><a class="header-anchor" href="#在-ubuntu-安裝-mariadb-資料庫" aria-hidden="true">#</a> 在 Ubuntu 安裝 MariaDB 資料庫</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>因為 MySQL 被甲骨文給買了，<br> 開源社群<s>免費仔們</s>擔心 MySQL 要不變成收費的，要不就是被冷凍了。<br> 後來也真的不出大家的意外就是了。</p><p>MariaDB 的開發團隊以 MySQL 為基礎開發的資料庫，<br> 所以許多開發者也無痛跳船了。</p>',4),u=t(`<h2 id="下載安裝" tabindex="-1"><a class="header-anchor" href="#下載安裝" aria-hidden="true">#</a> 下載安裝</h2><p>官方套件列表就有可以直接下載了，<br> 基本上在同個作業系統版本上，<br> 資料庫版本不會差太多。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> mariadb-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="設定-mariadb" tabindex="-1"><a class="header-anchor" href="#設定-mariadb" aria-hidden="true">#</a> 設定 MariaDB</h2><p>根據自己需要來設定，這邊提供翻譯參考。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 執行安全安裝設定</span>
<span class="token function">sudo</span> mysql_secure_installation
<span class="token comment"># 輸入root密碼，預設MariaDB沒有密碼，直接 Enter</span>
Enter current password <span class="token keyword">for</span> root <span class="token punctuation">(</span>enter <span class="token keyword">for</span> none<span class="token punctuation">)</span>:
<span class="token comment">#是否切換到unix套接字身份驗證[Y/n]，輸入Y</span>
Switch to unix_socket authentication <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> n
<span class="token comment"># 是否設定 MySQL root 密碼，輸入N</span>
Change root password? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> N
<span class="token comment"># 移除匿名帳號，輸入Y</span>
Remove anonymous users? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> Y
<span class="token comment"># 不允許遠端使用root帳號登入，輸入Y</span>
Disallow root login remotely? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> Y
<span class="token comment"># 移除測試資料庫與帳號，輸入Y</span>
Remove <span class="token builtin class-name">test</span> database and access to it? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> Y
<span class="token comment"># 重新載入權限設定，輸入Y</span>
Reload privilege tables now? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> Y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="設定登入使用者" tabindex="-1"><a class="header-anchor" href="#設定登入使用者" aria-hidden="true">#</a> 設定登入使用者</h3><p>密碼建議有一定的複雜度比較好，不然會從刪庫到跑路。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mariadb
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;account&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;account&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="設定遠端連線" tabindex="-1"><a class="header-anchor" href="#設定遠端連線" aria-hidden="true">#</a> 設定遠端連線</h3><p>如果有需要用資料庫管理工具，例如 <code>DBeaver</code>，那就要設定遠端連線。</p><p>預設的設定檔路徑：<code>/etc/mysql/mariadb.conf.d/50-server.cnf</code><br> 將 <code>bind-address = 127.0.0.1</code> 改為 <code>bind-address = 0.0.0.0</code></p><h3 id="重新啟動資料庫" tabindex="-1"><a class="header-anchor" href="#重新啟動資料庫" aria-hidden="true">#</a> 重新啟動資料庫</h3><p>重新啟動資料庫讓設定生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mysql restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2>`,16),h={href:"https://www.gushiciku.cn/pl/pEmy/zh-tw",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b={href:"https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),k={href:"https://medium.com/feveral%E7%9A%84%E7%A8%8B%E5%BC%8F%E7%AD%86%E8%A8%98/mariadb-%E5%85%81%E8%A8%B1%E5%A4%96%E9%83%A8%E9%80%A3%E7%B7%9A%E7%9A%84%E8%A8%AD%E5%AE%9A-f1c228443eaa",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"補充資料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#補充資料","aria-hidden":"true"},"#"),a(" 補充資料")],-1),f=n("p",null,"在 MariaDB 中，unix_socket authentication 是一種身份驗證方法，它基於 Unix/Linux 操作系統中的文件系統權限來驗證用戶身份，而不是使用用戶名和密碼。它允許在本地主機上使用 MariaDB 客戶端連接到 MariaDB 服務器時，使用目前登錄的操作系統用戶身份進行身份驗證，而無需提供用戶名和密碼。",-1),E=n("p",null,"使用 unix_socket authentication 的優點是：",-1),g=n("p",null,"方便性：在本地主機上連接到 MariaDB 服務器時，不需要記住用戶名和密碼，因為可以使用當前登錄的操作系統用戶身份進行身份驗證。",-1),x=n("p",null,"安全性：不需要將用戶名和密碼存儲在 MariaDB 配置文件中，因此可以避免密碼洩露和暴力破解攻擊。",-1),B=n("p",null,"簡化管理：無需為每個 MariaDB 用戶分配單獨的用戶名和密碼，簡化了用戶管理。",-1),D=n("p",null,"需要注意的是，使用 unix_socket authentication 只適用於在本地主機上使用 MariaDB 客戶端連接到 MariaDB 服務器時進行身份驗證。如果需要從遠程主機上連接到 MariaDB 服務器，仍然需要使用用戶名和密碼進行身份驗證。",-1);function M(w,A){const s=o("ExternalLinkIcon");return c(),r("div",null,[p,d(" more "),u,n("p",null,[n("a",h,[a("如何在 Ubuntu 20.04 上安裝 MariaDB"),e(s)]),m,n("a",b,[a("How To Install MariaDB on Ubuntu 20.04"),e(s)]),v,n("a",k,[a("MariaDB 允許外部連線的設定"),e(s)])]),_,f,E,g,x,B,D])}const L=i(l,[["render",M],["__file","index.html.vue"]]);export{L as default};