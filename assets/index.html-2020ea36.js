const e=JSON.parse('{"key":"v-34fd5092","path":"/posts/2023-07-05-install-ubuntu-docker-sqlserver/","title":"在 Ubuntu 安裝 SQL Server 資料庫","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 安裝 SQL Server 資料庫","date":"2023-04-18T00:00:00.000Z","category":"資料庫","tag":["SQL Server","SQL Server 2022","SQL Server 2022 Express","docker","Ubuntu","Ubuntu 22.04"],"description":"安裝 SQL Server Linux 目前 Ubuntu 22.04 無法直接安裝 SQL Server 目前 Ubuntu 20.04 可以直接安裝 SQL Server 可以使用 docker 的方案來安裝 安裝 docker [[install_ubuntu_docker]] 取得映像檔案 sudo docker pull mcr.microsoft.com/mssql/server:2022-latest","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2023-07-05-install-ubuntu-docker-sqlserver/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 安裝 SQL Server 資料庫"}],["meta",{"property":"og:description","content":"安裝 SQL Server Linux 目前 Ubuntu 22.04 無法直接安裝 SQL Server 目前 Ubuntu 20.04 可以直接安裝 SQL Server 可以使用 docker 的方案來安裝 安裝 docker [[install_ubuntu_docker]] 取得映像檔案 sudo docker pull mcr.microsoft.com/mssql/server:2022-latest"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-17T17:48:08.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"SQL Server"}],["meta",{"property":"article:tag","content":"SQL Server 2022"}],["meta",{"property":"article:tag","content":"SQL Server 2022 Express"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:tag","content":"Ubuntu 22.04"}],["meta",{"property":"article:published_time","content":"2023-04-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T17:48:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 安裝 SQL Server 資料庫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T17:48:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"正式版本","slug":"正式版本","link":"#正式版本","children":[]},{"level":2,"title":"Express 版本","slug":"express-版本","link":"#express-版本","children":[]},{"level":2,"title":"指定資料磁碟區容器","slug":"指定資料磁碟區容器","link":"#指定資料磁碟區容器","children":[]}],"git":{"createdTime":1689521396000,"updatedTime":1689616088000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":3}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"posts/2023-07-05-install-ubuntu-docker-sqlserver/index.md","localizedDate":"2023年4月18日","excerpt":"<h1> 安裝 SQL Server Linux</h1>\\n<ul>\\n<li>目前 Ubuntu 22.04 無法直接安裝 SQL Server</li>\\n<li>目前 Ubuntu 20.04 可以直接安裝 SQL Server</li>\\n<li>可以使用 docker 的方案來安裝</li>\\n</ul>\\n<h1> 安裝 docker</h1>\\n<p>[[install_ubuntu_docker]]</p>\\n<h1> 取得映像檔案</h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>sudo docker pull mcr.microsoft.com/mssql/server:2022-latest\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};