import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as r,a as e,b as d,e as l,f as c}from"./app-0cb0e3aa.js";const t="/assets/2023-08-17-01-67145ba2.png",o={},p=c('<h1 id="產生與設定自簽憑證" tabindex="-1"><a class="header-anchor" href="#產生與設定自簽憑證" aria-hidden="true">#</a> 產生與設定自簽憑證</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>現在因為資安趨勢所致，對於網站的資安都有要求。<br> 如果還是用 <code>http</code> 的網站或是有用 <code>https</code> 卻沒有 SSL 憑證，<br> 就會看到瀏覽器噴出警告畫面。</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>當開發網站要在測試環境為了方便測試，<br> 要讓伺服器自己產生一張憑證，然後匯入本機電腦，<br> 瀏覽器才不會跳出警告畫面。</p><h2 id="安裝-openssl-工具" tabindex="-1"><a class="header-anchor" href="#安裝-openssl-工具" aria-hidden="true">#</a> 安裝 OpenSSL 工具</h2><p>要建立自簽憑證就要先安裝 <code>openssl</code> 套件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> openssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-openssl-建立自簽憑證" tabindex="-1"><a class="header-anchor" href="#使用-openssl-建立自簽憑證" aria-hidden="true">#</a> 使用 OpenSSL 建立自簽憑證</h2><p>參照以下步驟來建立自簽憑證。</p><h3 id="建立-ssl-conf-設定檔" tabindex="-1"><a class="header-anchor" href="#建立-ssl-conf-設定檔" aria-hidden="true">#</a> 建立  <code>ssl.conf</code>  設定檔</h3><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[req]
prompt = no
default_md = sha256
default_bits = 2048
distinguished_name = dn
x509_extensions = v3_req

[dn]
C = TW
ST = Taiwan
L = Taipei
O = My Company
OU = IT Department
emailAddress = pamis@example.com
CN = localhost

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = *.localhost
DNS.2 = localhost
IP.1 = 192.168.100.87
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="透過-openssl-命令產生出自簽憑證與相對應的私密金鑰" tabindex="-1"><a class="header-anchor" href="#透過-openssl-命令產生出自簽憑證與相對應的私密金鑰" aria-hidden="true">#</a> 透過 OpenSSL 命令產生出自簽憑證與相對應的私密金鑰</h3><p>透過以下命令就可以建立出  <strong>私密金鑰</strong> (<code>server.key</code>) 與  <strong>憑證檔案</strong> (<code>server.crt</code>)：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-utf8</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-keyout</span> server.key <span class="token parameter variable">-out</span> server.crt <span class="token parameter variable">-config</span> ssl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="匯入自簽憑證" tabindex="-1"><a class="header-anchor" href="#匯入自簽憑證" aria-hidden="true">#</a> 匯入自簽憑證</h3><ul><li>Windows</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>certutil <span class="token parameter variable">-addstore</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;ROOT&quot;</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux (Ubuntu, Debian)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> server.crt /usr/local/share/ca-certificates/
<span class="token function">sudo</span> update-ca-certificates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2>`,21),u={href:"https://blog.miniasp.com/post/2019/02/25/Creating-Self-signed-Certificate-using-OpenSSL",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const a=s("ExternalLinkIcon");return i(),r("div",null,[p,e("p",null,[e("a",u,[d("如何使用 OpenSSL 建立開發測試用途的自簽憑證 (Self-Signed Certificate)"),l(a)])])])}const g=n(o,[["render",v],["__file","index.html.vue"]]);export{g as default};
