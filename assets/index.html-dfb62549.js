const t=JSON.parse(`{"key":"v-361d65f1","path":"/posts/2023-07-05-install-ubuntu-asp-net-6/","title":"在 Ubuntu 建構 ASP.NET Core 6 開發環境","lang":"zh-TW","frontmatter":{"title":"在 Ubuntu 建構 ASP.NET Core 6 開發環境","date":"2023-07-05T00:00:00.000Z","category":"後端","tag":["ASP.NET Core","ASP.NET Core 6'","API","Nginx","Kestrel"],"description":"作業系統安裝 [[install_ubuntu_22.04]] 開發環境安裝 盡量照順序做 [ 安裝 網頁伺服器 Nginx ] sudo apt update sudo apt install nginx [ 安裝 .NET 6 SDK ] sudo apt-get update sudo apt-get install -y dotnet-sdk-6.0 透過 Kestrel 啟動專案服務","head":[["meta",{"property":"og:url","content":"https://pamiswang.github.io/posts/2023-07-05-install-ubuntu-asp-net-6/"}],["meta",{"property":"og:site_name","content":"Pamis Blog"}],["meta",{"property":"og:title","content":"在 Ubuntu 建構 ASP.NET Core 6 開發環境"}],["meta",{"property":"og:description","content":"作業系統安裝 [[install_ubuntu_22.04]] 開發環境安裝 盡量照順序做 [ 安裝 網頁伺服器 Nginx ] sudo apt update sudo apt install nginx [ 安裝 .NET 6 SDK ] sudo apt-get update sudo apt-get install -y dotnet-sdk-6.0 透過 Kestrel 啟動專案服務"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2023-07-17T17:48:08.000Z"}],["meta",{"property":"article:author","content":"Pamis Wang"}],["meta",{"property":"article:tag","content":"ASP.NET Core"}],["meta",{"property":"article:tag","content":"ASP.NET Core 6'"}],["meta",{"property":"article:tag","content":"API"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:tag","content":"Kestrel"}],["meta",{"property":"article:published_time","content":"2023-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-17T17:48:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在 Ubuntu 建構 ASP.NET Core 6 開發環境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-17T17:48:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Pamis Wang\\",\\"url\\":\\"https://pamiswang.github.io\\",\\"email\\":\\"pamis1116@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"[ 安裝 網頁伺服器 Nginx ]","slug":"安裝-網頁伺服器-nginx","link":"#安裝-網頁伺服器-nginx","children":[]},{"level":2,"title":"[ 安裝 .NET 6 SDK ]","slug":"安裝-net-6-sdk","link":"#安裝-net-6-sdk","children":[]},{"level":2,"title":"[ Nginx 設定 ]","slug":"nginx-設定","link":"#nginx-設定","children":[{"level":3,"title":"設定檔的路徑，建議先將 default 另存一個 default_old","slug":"設定檔的路徑-建議先將-default-另存一個-default-old","link":"#設定檔的路徑-建議先將-default-另存一個-default-old","children":[]},{"level":3,"title":"參考 MSDN 官方的設定檔","slug":"參考-msdn-官方的設定檔","link":"#參考-msdn-官方的設定檔","children":[]},{"level":3,"title":"設定完成後，需要將這個設定檔連結至 site-enabled","slug":"設定完成後-需要將這個設定檔連結至-site-enabled","link":"#設定完成後-需要將這個設定檔連結至-site-enabled","children":[]},{"level":3,"title":"確認 Nginx 是否連接成功","slug":"確認-nginx-是否連接成功","link":"#確認-nginx-是否連接成功","children":[]},{"level":3,"title":"得到這個消息後便可重啟 Nginx","slug":"得到這個消息後便可重啟-nginx","link":"#得到這個消息後便可重啟-nginx","children":[]},{"level":3,"title":"重啟 Nginx","slug":"重啟-nginx","link":"#重啟-nginx","children":[]}]},{"level":2,"title":"[ Kestrel 建立服務 ]","slug":"kestrel-建立服務","link":"#kestrel-建立服務","children":[{"level":3,"title":"建立服務定義檔","slug":"建立服務定義檔","link":"#建立服務定義檔","children":[]},{"level":3,"title":"服務定義檔內容","slug":"服務定義檔內容","link":"#服務定義檔內容","children":[]},{"level":3,"title":"設好服務後註冊並啟動服務","slug":"設好服務後註冊並啟動服務","link":"#設好服務後註冊並啟動服務","children":[]}]}],"git":{"createdTime":1689521396000,"updatedTime":1689616088000,"contributors":[{"name":"pamis","email":"pamis1116@gmail.com","commits":3}]},"readingTime":{"minutes":1.76,"words":527},"filePathRelative":"posts/2023-07-05-install-ubuntu-asp-net-6/index.md","localizedDate":"2023年7月5日","excerpt":"<h1> 作業系統安裝</h1>\\n<p>[[install_ubuntu_22.04]]</p>\\n<h1> 開發環境安裝</h1>\\n<p>盡量照順序做</p>\\n<h2> [ 安裝 網頁伺服器 Nginx ]</h2>\\n<pre><code>sudo apt update\\nsudo apt install nginx\\n</code></pre>\\n<h2> [ 安裝 .NET 6 SDK ]</h2>\\n<pre><code>sudo apt-get update\\nsudo apt-get install -y dotnet-sdk-6.0\\n</code></pre>\\n<h1> 透過 Kestrel 啟動專案服務</h1>","autoDesc":true}`);export{t as data};