const e=JSON.parse('{"key":"v-12ab21a0","path":"/posts/2022-08-17-config-mariadb-10.6/","title":"設定 MariaDB 10.6","lang":"zh-TW","frontmatter":{"title":"設定 MariaDB 10.6","date":"2022-08-17T00:00:00.000Z","category":"資料庫","tag":["MariaDB","MariaDB 10.6"],"description":"路徑 ubuntu 安裝的 mariaDB 預設路徑為 /etc/mysql/conf.d/mysql.cnf 常用設定參考 設定區塊 [mysqld] 設定 mysql 資料庫的資料的存放目錄，必須是 data datadir = D:/WNMP/mariadb-10.6.7-winx64/data","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2022-08-17-config-mariadb-10.6/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"設定 MariaDB 10.6"}],["meta",{"property":"og:description","content":"路徑 ubuntu 安裝的 mariaDB 預設路徑為 /etc/mysql/conf.d/mysql.cnf 常用設定參考 設定區塊 [mysqld] 設定 mysql 資料庫的資料的存放目錄，必須是 data datadir = D:/WNMP/mariadb-10.6.7-winx64/data"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-17T17:48:08.000Z"}],["meta",{"property":"article:author","content":"Pamis Wnag"}],["meta",{"property":"article:tag","content":"MariaDB"}],["meta",{"property":"article:tag","content":"MariaDB 10.6"}],["meta",{"property":"article:published_time","content":"2022-08-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T17:48:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"設定 MariaDB 10.6\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T17:48:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wnag\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"設定區塊 [mysqld]","slug":"設定區塊-mysqld","link":"#設定區塊-mysqld","children":[{"level":3,"title":"設定 mysql 資料庫的資料的存放目錄，必須是 data","slug":"設定-mysql-資料庫的資料的存放目錄-必須是-data","link":"#設定-mysql-資料庫的資料的存放目錄-必須是-data","children":[]},{"level":3,"title":"mysql 服務端預設監聽(listen on)的 TCP/IP 埠","slug":"mysql-服務端預設監聽-listen-on-的-tcp-ip-埠","link":"#mysql-服務端預設監聽-listen-on-的-tcp-ip-埠","children":[]},{"level":3,"title":"伺服器使用的預設編碼","slug":"伺服器使用的預設編碼","link":"#伺服器使用的預設編碼","children":[]},{"level":3,"title":"指定每次連線時執行的 SQL","slug":"指定每次連線時執行的-sql","link":"#指定每次連線時執行的-sql","children":[]},{"level":3,"title":"表示初始化連線都設定為 utf8mb4 編碼","slug":"表示初始化連線都設定為-utf8mb4-編碼","link":"#表示初始化連線都設定為-utf8mb4-編碼","children":[]},{"level":3,"title":"指定索引緩衝區的大小","slug":"指定索引緩衝區的大小","link":"#指定索引緩衝區的大小","children":[]},{"level":3,"title":"允許最大傳輸大小","slug":"允許最大傳輸大小","link":"#允許最大傳輸大小","children":[]},{"level":3,"title":"分配設定的記憶體","slug":"分配設定的記憶體","link":"#分配設定的記憶體","children":[]},{"level":3,"title":"網路緩衝區大小","slug":"網路緩衝區大小","link":"#網路緩衝區大小","children":[]},{"level":3,"title":"讀取緩衝區大小","slug":"讀取緩衝區大小","link":"#讀取緩衝區大小","children":[]},{"level":3,"title":"緩衝區記憶體大小","slug":"緩衝區記憶體大小","link":"#緩衝區記憶體大小","children":[]},{"level":3,"title":"事務日誌檔案大小","slug":"事務日誌檔案大小","link":"#事務日誌檔案大小","children":[]},{"level":3,"title":"事務日誌緩衝大小","slug":"事務日誌緩衝大小","link":"#事務日誌緩衝大小","children":[]},{"level":3,"title":"事務日誌寫入策略","slug":"事務日誌寫入策略","link":"#事務日誌寫入策略","children":[]},{"level":3,"title":"InnoDB 等待最長時間","slug":"innodb-等待最長時間","link":"#innodb-等待最長時間","children":[]},{"level":3,"title":"指定所有 InnoDB 資料表空間的頁面大小","slug":"指定所有-innodb-資料表空間的頁面大小","link":"#指定所有-innodb-資料表空間的頁面大小","children":[]},{"level":3,"title":"大小寫敏感","slug":"大小寫敏感","link":"#大小寫敏感","children":[]}]},{"level":2,"title":"設定區塊 [client]","slug":"設定區塊-client","link":"#設定區塊-client","children":[]},{"level":2,"title":"設定區塊 [mysqldump]","slug":"設定區塊-mysqldump","link":"#設定區塊-mysqldump","children":[]},{"level":2,"title":"設定區塊 [isamchk]","slug":"設定區塊-isamchk","link":"#設定區塊-isamchk","children":[]},{"level":2,"title":"設定區塊 [myisamchk]","slug":"設定區塊-myisamchk","link":"#設定區塊-myisamchk","children":[]}],"git":{"createdTime":1689521396000,"updatedTime":1689616088000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":3}]},"readingTime":{"minutes":4.9,"words":1470},"filePathRelative":"posts/2022-08-17-config-mariadb-10.6/index.md","localizedDate":"2022年8月17日","excerpt":"<h1> 路徑</h1>\\n<p>ubuntu 安裝的 mariaDB 預設路徑為 <code>/etc/mysql/conf.d/mysql.cnf</code></p>\\n<h1> 常用設定參考</h1>\\n<h2> 設定區塊 [mysqld]</h2>\\n<h3> 設定 mysql 資料庫的資料的存放目錄，必須是 data</h3>\\n<div class=\\"language-ini line-numbers-mode\\" data-ext=\\"ini\\"><pre class=\\"language-ini\\"><code><span class=\\"token key attr-name\\">datadir</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">D:/WNMP/mariadb-10.6.7-winx64/data</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};