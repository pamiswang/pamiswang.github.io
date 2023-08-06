import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as s,a as e,b as d,e as a,f as i}from"./app-cad7e062.js";const h={},l=e("h1",{id:"安裝-php-xdebug",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安裝-php-xdebug","aria-hidden":"true"},"#"),d(" 安裝 PHP Xdebug")],-1),c=e("h3",{id:"可參考官方網站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#可參考官方網站","aria-hidden":"true"},"#"),d(" 可參考官方網站")],-1),u={href:"https://xdebug.org/docs/install",target:"_blank",rel:"noopener noreferrer"},p=i(`<h3 id="下載對應版本號" tabindex="-1"><a class="header-anchor" href="#下載對應版本號" aria-hidden="true">#</a> 下載對應版本號</h3><pre><code>sudo apt-get install php7.4-xdebug
sudo apt-get install php8.1-xdebug
</code></pre><h3 id="設定-php-ini" tabindex="-1"><a class="header-anchor" href="#設定-php-ini" aria-hidden="true">#</a> 設定 php.ini</h3><pre><code>[XDebug]
; 7.4的預設路徑
zend_extension=/usr/lib/php/20190902/xdebug.so
; 8.1的預設路徑
zend_extension=/usr/lib/php/20210902/xdebug.so
; 開啟遠端除錯
xdebug.mode = debug
可同時啟用多種模式：xdebug.mode=develop,trace。
xdebug.mode = debug,develop
xdebug.start_with_request = yes
</code></pre><h3 id="設定參考" tabindex="-1"><a class="header-anchor" href="#設定參考" aria-hidden="true">#</a> 設定參考</h3>`,5),_={href:"https://xdebug.org/docs/all_settings",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"xdebug-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#xdebug-mode","aria-hidden":"true"},"#"),d(" xdebug.mode")],-1),x=e("ul",null,[e("li",null,"off 停用 xdebug"),e("li",null,"develop 啟用開發協助工具"),e("li",null,"debug 啟用中斷點除錯")],-1);function g(f,m){const n=r("ExternalLinkIcon");return o(),s("div",null,[l,c,e("p",null,[e("a",u,[d("https://xdebug.org/docs/install"),a(n)])]),p,e("p",null,[e("a",_,[d("https://xdebug.org/docs/all_settings"),a(n)])]),b,x])}const N=t(h,[["render",g],["__file","index.html.vue"]]);export{N as default};
