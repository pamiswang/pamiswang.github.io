const e=JSON.parse('{"key":"v-6d68e9f8","path":"/posts/2022-08-24-config-mariadb-10.6/","title":"設定 MariaDB 10.6","lang":"zh-TW","frontmatter":{"title":"設定 MariaDB 10.6","date":"2022-08-24T00:00:00.000Z","category":"資料庫","tag":["MariaDB","MariaDB 10.6"],"description":"設定 MariaDB 10.6 前言 本文是關於 MariaDB 的一些常用設定 是以 Ubuntu 環境下為基準 如果還不會安裝的可以先去看這篇 在 Ubuntu 安裝 MariaDB 資料庫 在 Windows 安裝 MariaDB 資料庫","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2022-08-24-config-mariadb-10.6/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"設定 MariaDB 10.6"}],["meta",{"property":"og:description","content":"設定 MariaDB 10.6 前言 本文是關於 MariaDB 的一些常用設定 是以 Ubuntu 環境下為基準 如果還不會安裝的可以先去看這篇 在 Ubuntu 安裝 MariaDB 資料庫 在 Windows 安裝 MariaDB 資料庫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-26T13:38:36.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"MariaDB"}],["meta",{"property":"article:tag","content":"MariaDB 10.6"}],["meta",{"property":"article:published_time","content":"2022-08-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-26T13:38:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"設定 MariaDB 10.6\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-26T13:38:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"路徑","slug":"路徑","link":"#路徑","children":[]},{"level":2,"title":"設定區塊 [mysqld]","slug":"設定區塊-mysqld","link":"#設定區塊-mysqld","children":[{"level":3,"title":"設定 mysql 資料庫的資料的存放目錄，必須是 data","slug":"設定-mysql-資料庫的資料的存放目錄-必須是-data","link":"#設定-mysql-資料庫的資料的存放目錄-必須是-data","children":[]},{"level":3,"title":"mysql 服務端預設監聽(listen on)的 TCP/IP 埠","slug":"mysql-服務端預設監聽-listen-on-的-tcp-ip-埠","link":"#mysql-服務端預設監聽-listen-on-的-tcp-ip-埠","children":[]},{"level":3,"title":"伺服器使用的預設編碼","slug":"伺服器使用的預設編碼","link":"#伺服器使用的預設編碼","children":[]},{"level":3,"title":"指定每次連線時執行的 SQL","slug":"指定每次連線時執行的-sql","link":"#指定每次連線時執行的-sql","children":[]},{"level":3,"title":"表示初始化連線都設定為 utf8mb4 編碼","slug":"表示初始化連線都設定為-utf8mb4-編碼","link":"#表示初始化連線都設定為-utf8mb4-編碼","children":[]},{"level":3,"title":"指定索引緩衝區的大小","slug":"指定索引緩衝區的大小","link":"#指定索引緩衝區的大小","children":[]},{"level":3,"title":"允許最大傳輸大小","slug":"允許最大傳輸大小","link":"#允許最大傳輸大小","children":[]},{"level":3,"title":"分配設定的記憶體","slug":"分配設定的記憶體","link":"#分配設定的記憶體","children":[]},{"level":3,"title":"網路緩衝區大小","slug":"網路緩衝區大小","link":"#網路緩衝區大小","children":[]},{"level":3,"title":"讀取緩衝區大小","slug":"讀取緩衝區大小","link":"#讀取緩衝區大小","children":[]},{"level":3,"title":"緩衝區記憶體大小","slug":"緩衝區記憶體大小","link":"#緩衝區記憶體大小","children":[]},{"level":3,"title":"事務日誌檔案大小","slug":"事務日誌檔案大小","link":"#事務日誌檔案大小","children":[]},{"level":3,"title":"事務日誌緩衝大小","slug":"事務日誌緩衝大小","link":"#事務日誌緩衝大小","children":[]},{"level":3,"title":"事務日誌寫入策略","slug":"事務日誌寫入策略","link":"#事務日誌寫入策略","children":[]},{"level":3,"title":"InnoDB 等待最長時間","slug":"innodb-等待最長時間","link":"#innodb-等待最長時間","children":[]},{"level":3,"title":"指定所有 InnoDB 資料表空間的頁面大小","slug":"指定所有-innodb-資料表空間的頁面大小","link":"#指定所有-innodb-資料表空間的頁面大小","children":[]},{"level":3,"title":"大小寫敏感","slug":"大小寫敏感","link":"#大小寫敏感","children":[]}]},{"level":2,"title":"設定區塊 [client]","slug":"設定區塊-client","link":"#設定區塊-client","children":[]},{"level":2,"title":"設定區塊 [mysqldump]","slug":"設定區塊-mysqldump","link":"#設定區塊-mysqldump","children":[]},{"level":2,"title":"設定區塊 [isamchk]","slug":"設定區塊-isamchk","link":"#設定區塊-isamchk","children":[]},{"level":2,"title":"設定區塊 [myisamchk]","slug":"設定區塊-myisamchk","link":"#設定區塊-myisamchk","children":[]}],"git":{"createdTime":1690378716000,"updatedTime":1690378716000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":1}]},"readingTime":{"minutes":5.14,"words":1542},"filePathRelative":"posts/2022-08-24-config-mariadb-10.6/index.md","localizedDate":"2022年8月24日","excerpt":"<h1> 設定 MariaDB 10.6</h1>\\n<h2> 前言</h2>\\n<p>本文是關於 MariaDB 的一些常用設定<br>\\n是以 Ubuntu 環境下為基準<br>\\n如果還不會安裝的可以先去看這篇<br>\\n<a href=\\"/posts/2022-08-13-install-ubuntu-mariadb/\\" target=\\"blank\\">在 Ubuntu 安裝 MariaDB 資料庫</a><br>\\n<a href=\\"/posts/2022-09-02-install-windows-mariadb/\\" target=\\"blank\\">在 Windows 安裝 MariaDB 資料庫</a></p>\\n","autoDesc":true}');export{e as data};