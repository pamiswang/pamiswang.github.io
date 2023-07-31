import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as o,a as e,b as s,e as a,f as r}from"./app-0cd738d5.js";const c={},d=r(`<h1 id="安裝-sql-server-linux" tabindex="-1"><a class="header-anchor" href="#安裝-sql-server-linux" aria-hidden="true">#</a> 安裝 SQL Server Linux</h1><ul><li>目前 Ubuntu 22.04 無法直接安裝 SQL Server</li><li>目前 Ubuntu 20.04 可以直接安裝 SQL Server</li><li>可以使用 docker 的方案來安裝</li></ul><h1 id="安裝-docker" tabindex="-1"><a class="header-anchor" href="#安裝-docker" aria-hidden="true">#</a> 安裝 docker</h1><p>[[install_ubuntu_docker]]</p><h1 id="取得映像檔案" tabindex="-1"><a class="header-anchor" href="#取得映像檔案" aria-hidden="true">#</a> 取得映像檔案</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo docker pull mcr.microsoft.com/mssql/server:2022-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="以-docker-執行-linux-容器映像" tabindex="-1"><a class="header-anchor" href="#以-docker-執行-linux-容器映像" aria-hidden="true">#</a> 以 Docker 執行 Linux 容器映像</h1><h2 id="正式版本" tabindex="-1"><a class="header-anchor" href="#正式版本" aria-hidden="true">#</a> 正式版本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo docker run \\
-e &quot;ACCEPT_EULA=Y&quot; \\
-e &quot;MSSQL_SA_PASSWORD=&lt;YourStrong@Passw0rd&gt;&quot; \\
-p 1433:1433 --name sql_server --hostname sql_server \\
-d \\
mcr.microsoft.com/mssql/server:2022-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="express-版本" tabindex="-1"><a class="header-anchor" href="#express-版本" aria-hidden="true">#</a> Express 版本</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo docker run \\
-e &quot;ACCEPT_EULA=Y&quot; \\
-e &quot;MSSQL_SA_PASSWORD=&lt;YourStrong@Passw0rd&gt;&quot; \\
-e &quot;MSSQL_PID=Express&quot; \\
-p 1433:1433 --name sql_server --hostname sql_server \\
-d \\
mcr.microsoft.com/mssql/server:2022-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定資料磁碟區容器" tabindex="-1"><a class="header-anchor" href="#指定資料磁碟區容器" aria-hidden="true">#</a> 指定資料磁碟區容器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo docker run \\
-e &quot;ACCEPT_EULA=Y&quot; \\
-e &quot;MSSQL_SA_PASSWORD=&lt;YourStrong@Passw0rd&gt;&quot; \\
-e &quot;MSSQL_PID=Express&quot; \\
-p 1433:1433 --name sql_server --hostname sql_server \\
-v sql_server_volume:/var/opt/mssql \\
-d \\
mcr.microsoft.com/mssql/server:2022-latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),u=e("li",null,[s("-e ACCEPT_EULA=Y : 將  "),e("code",null,"ACCEPT_EULA"),s("  變數設為任意值可確認您接受終端使用者授權合約。 此為 SQL Server 映像的必要設定。")],-1),p=e("li",null,'-e "MSSQL_SA_PASSWORD：指定您自己的強式密碼，該密碼長度至少需為 8 個字元且符合 SQL Server 密碼需求。 此為 SQL Server 映像的必要設定。',-1),v=e("li",null,"-p 1433:1433 ：將主機環境上的 TCP 連接埠 (第一個值) 對應至容器中的 TCP 連接埠 (第二個值)。 在本範例中，SQL Server 正在接聽容器中的 TCP 1433，且此容器連接埠接著會對主機上的 TCP 連接埠 1433 公開。",-1),m=e("li",null,"--name：為容器指定自訂名稱",-1),h=e("li",null,"--hostname：用來明確設定容器主機名稱。 如果您未指定主機名稱，則會預設為隨機產生之系統 GUID 的容器識別碼。",-1),k=e("li",null,"-v：指定資料磁碟區容器",-1),_=e("li",null,"-d：在背景執行容器 (精靈)",-1),b={href:"http://mcr.microsoft.com/mssql/server:2022-latest%EF%BC%9ASQL",target:"_blank",rel:"noopener noreferrer"},S=r(`<h1 id="docker-compose-for-sql-server-linux" tabindex="-1"><a class="header-anchor" href="#docker-compose-for-sql-server-linux" aria-hidden="true">#</a> Docker Compose For SQL Server Linux</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>
<span class="token comment"># sudo docker-compose up -d</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">sql-server-2022</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mcr.microsoft.com/mssql/server<span class="token punctuation">:</span>2022<span class="token punctuation">-</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> sql<span class="token punctuation">-</span>server<span class="token punctuation">-</span><span class="token number">2022</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 1433<span class="token punctuation">:</span><span class="token number">1433</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> sql_server_volume<span class="token punctuation">:</span>/var/opt/mssql/
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ACCEPT_EULA=Y
      <span class="token punctuation">-</span> SA_PASSWORD=genius@TCA<span class="token comment">#04170821</span>
      <span class="token punctuation">-</span> MSSQL_PID=Express
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;bridge&quot;</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">sql_server_volume</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,3),x={href:"https://learn.microsoft.com/zh-tw/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash",target:"_blank",rel:"noopener noreferrer"},q={href:"https://learn.microsoft.com/zh-tw/sql/linux/sql-server-linux-docker-container-configure?view=sql-server-ver16&pivots=cs1-bash",target:"_blank",rel:"noopener noreferrer"},f={href:"https://dotblogs.com.tw/rexhuang/2020/03/07/223552",target:"_blank",rel:"noopener noreferrer"},g={href:"https://hub.docker.com/_/microsoft-mssql-server?tab=description",target:"_blank",rel:"noopener noreferrer"};function L(A,P){const n=l("ExternalLinkIcon");return i(),o("div",null,[d,e("ul",null,[u,p,v,m,h,k,_,e("li",null,[e("a",b,[s("mcr.microsoft.com/mssql/server:2022-latest：SQL"),a(n)]),s(" Server Linux 容器映像。")])]),S,e("p",null,[e("a",x,[s("使用 Docker 執行 SQL Server Linux 容器映像"),a(n)])]),e("p",null,[e("a",q,[s("設定和自訂 SQL Server Docker 容器"),a(n)])]),e("p",null,[e("a",f,[s("建立一個 Sql Server container"),a(n)])]),e("p",null,[e("a",g,[s("Microsoft SQL Server - Ubuntu based images"),a(n)])])])}const Q=t(c,[["render",L],["__file","index.html.vue"]]);export{Q as default};
