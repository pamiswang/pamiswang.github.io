import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as u,a,b as e,e as n,w as t,d as o,f as l}from"./app-bdf1ef2b.js";const p={},v=a("h1",{id:"設定-mariadb-10-6",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#設定-mariadb-10-6","aria-hidden":"true"},"#"),e(" 設定 MariaDB 10.6")],-1),h=a("h2",{id:"前言",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),m=a("br",null,null,-1),b=a("br",null,null,-1),k=a("br",null,null,-1),g=a("br",null,null,-1),_=l(`<h2 id="路徑" tabindex="-1"><a class="header-anchor" href="#路徑" aria-hidden="true">#</a> 路徑</h2><p>Ubuntu 安裝 MariaDB 預設的設定檔案路徑為 <code>/etc/mysql/my.cnf</code></p><h2 id="常用設定參考" tabindex="-1"><a class="header-anchor" href="#常用設定參考" aria-hidden="true">#</a> 常用設定參考</h2><p>以下是參考官方文件同時記錄一些自己有使用過的設定，<br> 實際設定還是要根據使用者的需求調整。</p><h2 id="設定區塊-mysqld" tabindex="-1"><a class="header-anchor" href="#設定區塊-mysqld" aria-hidden="true">#</a> 設定區塊 [mysqld]</h2><h3 id="設定-mysql-資料庫的資料的存放目錄-必須是-data" tabindex="-1"><a class="header-anchor" href="#設定-mysql-資料庫的資料的存放目錄-必須是-data" aria-hidden="true">#</a> 設定 mysql 資料庫的資料的存放目錄，必須是 data</h3><p>預設值 <code>/var/lib/mysql</code></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">datadir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/lib/mysql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mysql-服務端預設監聽-listen-on-的-tcp-ip-埠" tabindex="-1"><a class="header-anchor" href="#mysql-服務端預設監聽-listen-on-的-tcp-ip-埠" aria-hidden="true">#</a> mysql 服務端預設監聽(listen on)的 TCP/IP 埠</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="伺服器使用的預設編碼" tabindex="-1"><a class="header-anchor" href="#伺服器使用的預設編碼" aria-hidden="true">#</a> 伺服器使用的預設編碼</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">character_set_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4</span>
<span class="token key attr-name">collation_server</span> <span class="token punctuation">=</span> <span class="token value attr-value">utf8mb4_unicode_ci</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定每次連線時執行的-sql" tabindex="-1"><a class="header-anchor" href="#指定每次連線時執行的-sql" aria-hidden="true">#</a> 指定每次連線時執行的 SQL</h3><p>包含一個或多個 SQL 語句的字符串，用分號分隔，伺服器將為每個連接的客戶端執行這些語句。 如果其中一個語句存在語法錯誤，則客戶端將無法連接。</p><h3 id="表示初始化連線都設定為-utf8mb4-編碼" tabindex="-1"><a class="header-anchor" href="#表示初始化連線都設定為-utf8mb4-編碼" aria-hidden="true">#</a> 表示初始化連線都設定為 utf8mb4 編碼</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">init_connect</span> <span class="token punctuation">=</span> <span class="token value attr-value">&#39;<span class="token inner-value">SET NAMES utf8mb4</span>&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定索引緩衝區的大小" tabindex="-1"><a class="header-anchor" href="#指定索引緩衝區的大小" aria-hidden="true">#</a> 指定索引緩衝區的大小</h3><p>決定了索引處理的速度，尤其是索引讀的速度，建議設定成實體記憶體的 1/4，<br> 甚至實體記憶體的 30%-40%，如果設定太大，系統就會頻繁的換頁，降低系統效能</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="允許最大傳輸大小" tabindex="-1"><a class="header-anchor" href="#允許最大傳輸大小" aria-hidden="true">#</a> 允許最大傳輸大小</h3><p>可以增大此值以便於 server 端接收更大的 SQL</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分配設定的記憶體" tabindex="-1"><a class="header-anchor" href="#分配設定的記憶體" aria-hidden="true">#</a> 分配設定的記憶體</h3><p>在每個 connection 第一次需要使用這個 buffer 的時候，一次性分配設定的記憶體</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">512K</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="網路緩衝區大小" tabindex="-1"><a class="header-anchor" href="#網路緩衝區大小" aria-hidden="true">#</a> 網路緩衝區大小</h3><p>不可超過 1M，且必須小於等於 max_allowed_packet</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">net_buffer_length</span> <span class="token punctuation">=</span> <span class="token value attr-value">8K</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="讀取緩衝區大小" tabindex="-1"><a class="header-anchor" href="#讀取緩衝區大小" aria-hidden="true">#</a> 讀取緩衝區大小</h3><p>對資料表進行順序讀取的請求將分配一個讀取緩衝區，<br> 如果對資料表的順序讀取請求非常頻繁，<br> 可以通過增加該變數值以及記憶體緩衝區大小提高其效能。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">read_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256K</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="讀取隨機緩衝區大小" tabindex="-1"><a class="header-anchor" href="#讀取隨機緩衝區大小" aria-hidden="true">#</a> 讀取隨機緩衝區大小</h4><p>引數用在 sort 查詢之後 ，以保證獲取以順序的方式獲取到查詢的資料。<br> 如果你有很多 order by 查詢語句，增長這值能夠提升效能</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">read_rnd_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">512K</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="repair-table" tabindex="-1"><a class="header-anchor" href="#repair-table" aria-hidden="true">#</a> REPAIR TABLE</h4><p>設定在 REPAIR TABLE，或者用 CREATE INDEX 建立索引或 ALTER TABLE 的過程中排序索引所分配的緩衝區大小。可設定範圍 4Bytes 至 4GB，預設為 8MB。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">myisam_max_sort_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2G</span>
<span class="token key attr-name">myisam_sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">8M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="錯誤日誌輸出目的地" tabindex="-1"><a class="header-anchor" href="#錯誤日誌輸出目的地" aria-hidden="true">#</a> 錯誤日誌輸出目的地</h4><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">log_error</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">mysql_error.log</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="設定-server-id" tabindex="-1"><a class="header-anchor" href="#設定-server-id" aria-hidden="true">#</a> 設定 server-id</h4><p>如果不設定則 server-id 是根據伺服器 ip 地址後 2 位生成的，預設 0 或 1</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">server-id</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="sql-mode" tabindex="-1"><a class="header-anchor" href="#sql-mode" aria-hidden="true">#</a> sql_mode</h4><p>設定 SQL 語句檢查</p><ul><li>NO_ZERO_IN_DATE &gt; 在嚴格模式下，不允許日期和月份為零</li><li>NO_ZERO_DATE &gt; mysql 資料庫不允許插入零日期，插入零日期會丟擲錯誤而不是警告。</li><li>NO_ENGINE_SUBSTITUTION &gt; 如果需要的儲存引擎被禁用或未編譯，那麼丟擲錯誤。</li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">sql_mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="跳過-innodb-模式" tabindex="-1"><a class="header-anchor" href="#跳過-innodb-模式" aria-hidden="true">#</a> 跳過 InnoDB 模式</h4><p>如果使用的是 InnoDB 資料庫引擎，請註釋以下內容</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>skip-innodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="放置表空間資料的目錄" tabindex="-1"><a class="header-anchor" href="#放置表空間資料的目錄" aria-hidden="true">#</a> 放置表空間資料的目錄，</h4><p>預設在 mysql 的資料目錄，設定到和 MySQL 安裝檔案不同的分割槽可以提高效能。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_data_home_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">D:/WNMP/mariadb-10.6.7-winx64/data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定表資料和索引儲存的空間，可以是一個或者多個檔案。<br> 最後一個資料檔案必須是自動擴充的，也只有最後一個檔案允許自動擴充。<br> 當空間用完後，自動擴充資料檔案就會自動增長（以 8MB 為單位）以容納額外的資料。<br> 例如：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_data_file_path</span> <span class="token punctuation">=</span> <span class="token value attr-value">/disk1/ibdata1:900M; /disk2/ibdata2:50M:autoextend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>兩個資料檔案放在不同的磁碟上。<br> 資料首先放在 ibdata1 中，當達到 900M 以後，資料就放在 ibdata2 中。<br> 一旦達到 50MB，ibdata2 將以 8MB 為單位自動增長。<br> 如果磁碟滿了，需要在另外的磁碟上面增加一個資料檔案。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_data_file_path</span> <span class="token punctuation">=</span> <span class="token value attr-value">ibdata1:10M:autoextend</span>
<span class="token key attr-name">innodb_log_group_home_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">D:/WNMP/mariadb-10.6.7-winx64/data</span>
<span class="token key attr-name">innodb_log_arch_dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">D:/xampp/mysql/data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="緩衝區記憶體大小" tabindex="-1"><a class="header-anchor" href="#緩衝區記憶體大小" aria-hidden="true">#</a> 緩衝區記憶體大小</h3><p>這是 InnoDB 最重要的設定，對 InnoDB 效能有決定性的影響。<br> 預設的設定只有 8M，所以預設的資料庫設定下面 InnoDB 效能很差。<br> 在只有 InnoDB 儲存引擎的資料庫伺服器上面，可以設定 60-80%的記憶體。<br> 更精確一點，在記憶體容量允許的情況下面設定比 InnoDB tablespaces 大 10%的記憶體大小。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">8165M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="事務日誌檔案大小" tabindex="-1"><a class="header-anchor" href="#事務日誌檔案大小" aria-hidden="true">#</a> 事務日誌檔案大小</h3><p>該引數決定了 recovery speed。太大的話 recovery 就會比較慢，太小了影響查詢效能，一般取 256M 可以兼顧效能和 recovery 的速度</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="事務日誌緩衝大小" tabindex="-1"><a class="header-anchor" href="#事務日誌緩衝大小" aria-hidden="true">#</a> 事務日誌緩衝大小</h3><p>確保有足夠大的日誌緩衝區來儲存髒資料在被寫入到日誌檔案之前</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_log_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">8M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="事務日誌寫入策略" tabindex="-1"><a class="header-anchor" href="#事務日誌寫入策略" aria-hidden="true">#</a> 事務日誌寫入策略</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>0：log buffer 將每秒一次地寫入 log file 中，並且 log file 的 flush(刷到磁碟)操作同時進行。該模式下在事務提交的時候，不會主動觸發寫入磁碟的操作。</li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>1：每次事務提交時 MySQL 都會把 log buffer 的資料寫入 log file，並且 flush(刷到磁碟)中去，該模式為系統預設。</li></ul><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>2：每次事務提交時 MySQL 都會把 log buffer 的資料寫入 log file，但是 flush(刷到磁碟)操作並不會同時進行。該模式下，MySQL 會每秒執行一次 flush(刷到磁碟)操作。</li></ul><h3 id="innodb-等待最長時間" tabindex="-1"><a class="header-anchor" href="#innodb-等待最長時間" aria-hidden="true">#</a> InnoDB 等待最長時間</h3><p>參數單位為秒</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_lock_wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定所有-innodb-資料表空間的頁面大小" tabindex="-1"><a class="header-anchor" href="#指定所有-innodb-資料表空間的頁面大小" aria-hidden="true">#</a> 指定所有 InnoDB 資料表空間的頁面大小</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">innodb_page_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">32K</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="大小寫敏感" tabindex="-1"><a class="header-anchor" href="#大小寫敏感" aria-hidden="true">#</a> 大小寫敏感</h3><h4 id="表名存儲為給定的大小和比較是區分大小寫的" tabindex="-1"><a class="header-anchor" href="#表名存儲為給定的大小和比較是區分大小寫的" aria-hidden="true">#</a> 表名存儲為給定的大小和比較是區分大小寫的</h4><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="表名存儲在磁盤是小寫的-但是比較的時候是不區分大小寫" tabindex="-1"><a class="header-anchor" href="#表名存儲在磁盤是小寫的-但是比較的時候是不區分大小寫" aria-hidden="true">#</a> 表名存儲在磁盤是小寫的，但是比較的時候是不區分大小寫</h4><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="表名存儲為給定的大小寫但是比較的時候是小寫的" tabindex="-1"><a class="header-anchor" href="#表名存儲為給定的大小寫但是比較的時候是小寫的" aria-hidden="true">#</a> 表名存儲為給定的大小寫但是比較的時候是小寫的</h4><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="設定區塊-client" tabindex="-1"><a class="header-anchor" href="#設定區塊-client" aria-hidden="true">#</a> 設定區塊 [client]</h2>`,85),f={href:"https://mariadb.com/kb/en/clients-utilities/",target:"_blank",rel:"noopener noreferrer"},x=l(`<h3 id="連接到資料庫時使用的密碼。" tabindex="-1"><a class="header-anchor" href="#連接到資料庫時使用的密碼。" aria-hidden="true">#</a> 連接到資料庫時使用的密碼。</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">your_password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用於連接的-tcp-ip-端口號。" tabindex="-1"><a class="header-anchor" href="#用於連接的-tcp-ip-端口號。" aria-hidden="true">#</a> 用於連接的 TCP/IP 端口號。</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">port_num</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="資料庫的外掛目錄。" tabindex="-1"><a class="header-anchor" href="#資料庫的外掛目錄。" aria-hidden="true">#</a> 資料庫的外掛目錄。</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">plugin-dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">/path/to/plugin/directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="設定區塊-mysqldump" tabindex="-1"><a class="header-anchor" href="#設定區塊-mysqldump" aria-hidden="true">#</a> 設定區塊 [mysqldump]</h2><h3 id="修改資料輸入上限" tabindex="-1"><a class="header-anchor" href="#修改資料輸入上限" aria-hidden="true">#</a> 修改資料輸入上限</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">max_allowed_packet</span> <span class="token punctuation">=</span> <span class="token value attr-value">16M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="設定區塊-isamchk" tabindex="-1"><a class="header-anchor" href="#設定區塊-isamchk" aria-hidden="true">#</a> 設定區塊 [isamchk]</h2><h3 id="指定索引緩衝區的大小-1" tabindex="-1"><a class="header-anchor" href="#指定索引緩衝區的大小-1" aria-hidden="true">#</a> 指定索引緩衝區的大小</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">20M</span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">20M</span>
<span class="token key attr-name">read_buffer</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
<span class="token key attr-name">write_buffer</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="設定區塊-myisamchk" tabindex="-1"><a class="header-anchor" href="#設定區塊-myisamchk" aria-hidden="true">#</a> 設定區塊 [myisamchk]</h2><h3 id="指定索引緩衝區的大小-2" tabindex="-1"><a class="header-anchor" href="#指定索引緩衝區的大小-2" aria-hidden="true">#</a> 指定索引緩衝區的大小</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">20M</span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">20M</span>
<span class="token key attr-name">read_buffer</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
<span class="token key attr-name">write_buffer</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2>`,16),y={href:"https://mariadb.com/kb/en/configuring-mariadb-with-option-files/",target:"_blank",rel:"noopener noreferrer"};function M(B,q){const s=d("RouterLink"),i=d("ExternalLinkIcon");return c(),u("div",null,[v,h,a("p",null,[e("本文是關於 MariaDB 的一些常用設定，"),m,e(" 是以 Ubuntu 環境下為基準，"),b,e(" 如果還不會安裝的可以先去看這篇"),k,n(s,{to:"/posts/2022-08-13-install-ubuntu-mariadb/"},{default:t(()=>[e("在 Ubuntu 安裝 MariaDB 資料庫")]),_:1}),g,n(s,{to:"/posts/2022-09-02-install-windows-mariadb/"},{default:t(()=>[e("在 Windows 安裝 MariaDB 資料庫")]),_:1})]),o(" more "),_,a("p",null,[a("a",f,[e("Clients & Utilities"),n(i)])]),x,a("p",null,[a("a",y,[e("Configuring MariaDB with Option Files"),n(i)])])])}const D=r(p,[["render",M],["__file","index.html.vue"]]);export{D as default};