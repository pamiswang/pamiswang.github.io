const e=JSON.parse('{"key":"v-18118ae4","path":"/posts/2022-12-13-install-windows-run-hidden-console/","title":"在 Windows 使用 RunHiddenConsole","lang":"zh-TW","frontmatter":{"title":"在 Windows 使用 RunHiddenConsole","date":"2022-12-13T00:00:00.000Z","category":"開發環境","tag":["RunHiddenConsole","Nginx","PHP","MariaDB","Windows"],"description":"RunHiddenConsole 工具教學 下載 RunHiddenConsole 工具 可在 D:\\\\WNMP 撰寫 BAT 檔案省去打字 撰寫 BAT 檔案 開啟 Nginx 與 PHP ( start_nginx_php.bat ) @echo off echo Starting PHP FastCGI... D:\\\\WNMP\\\\RunHiddenConsole.exe D:\\\\WNMP\\\\php-8.1.5-nts-Win32-vs16-x64\\\\php-cgi.exe -b 127.0.0.1:9000 echo Starting nginx... D:\\\\WNMP\\\\RunHiddenConsole.exe D:\\\\WNMP\\\\nginx-1.20.2\\\\nginx.exe -p D:\\\\WNMP\\\\nginx-1.20.2","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2022-12-13-install-windows-run-hidden-console/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Windows 使用 RunHiddenConsole"}],["meta",{"property":"og:description","content":"RunHiddenConsole 工具教學 下載 RunHiddenConsole 工具 可在 D:\\\\WNMP 撰寫 BAT 檔案省去打字 撰寫 BAT 檔案 開啟 Nginx 與 PHP ( start_nginx_php.bat ) @echo off echo Starting PHP FastCGI... D:\\\\WNMP\\\\RunHiddenConsole.exe D:\\\\WNMP\\\\php-8.1.5-nts-Win32-vs16-x64\\\\php-cgi.exe -b 127.0.0.1:9000 echo Starting nginx... D:\\\\WNMP\\\\RunHiddenConsole.exe D:\\\\WNMP\\\\nginx-1.20.2\\\\nginx.exe -p D:\\\\WNMP\\\\nginx-1.20.2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-17T17:48:08.000Z"}],["meta",{"property":"article:author","content":"Pamis Wnag"}],["meta",{"property":"article:tag","content":"RunHiddenConsole"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:tag","content":"PHP"}],["meta",{"property":"article:tag","content":"MariaDB"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:published_time","content":"2022-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T17:48:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Windows 使用 RunHiddenConsole\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T17:48:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wnag\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"開啟 Nginx 與 PHP ( start_nginx_php.bat )","slug":"開啟-nginx-與-php-start-nginx-php-bat","link":"#開啟-nginx-與-php-start-nginx-php-bat","children":[]},{"level":2,"title":"關閉 Nginx 與 PHP ( stop_nginx_php.bat )","slug":"關閉-nginx-與-php-stop-nginx-php-bat","link":"#關閉-nginx-與-php-stop-nginx-php-bat","children":[]},{"level":2,"title":"開啟 MariaDB ( start_mariadb.bat )","slug":"開啟-mariadb-start-mariadb-bat","link":"#開啟-mariadb-start-mariadb-bat","children":[]},{"level":2,"title":"關閉 MariaDB ( stop_mariadb.bat )","slug":"關閉-mariadb-stop-mariadb-bat","link":"#關閉-mariadb-stop-mariadb-bat","children":[]}],"git":{"createdTime":1689521396000,"updatedTime":1689616088000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":3}]},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"posts/2022-12-13-install-windows-run-hidden-console/index.md","localizedDate":"2022年12月13日","excerpt":"<h1> RunHiddenConsole 工具教學</h1>\\n<p>下載 RunHiddenConsole 工具<br>\\n可在 D:\\\\WNMP 撰寫 BAT 檔案省去打字</p>\\n<h1> 撰寫 BAT 檔案</h1>\\n<h2> 開啟 Nginx 與 PHP ( start_nginx_php.bat )</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>@echo off\\necho Starting PHP FastCGI...\\nD:\\\\WNMP\\\\RunHiddenConsole.exe D:\\\\WNMP\\\\php-8.1.5-nts-Win32-vs16-x64\\\\php-cgi.exe -b 127.0.0.1:9000\\necho Starting nginx...\\nD:\\\\WNMP\\\\RunHiddenConsole.exe D:\\\\WNMP\\\\nginx-1.20.2\\\\nginx.exe -p D:\\\\WNMP\\\\nginx-1.20.2\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};