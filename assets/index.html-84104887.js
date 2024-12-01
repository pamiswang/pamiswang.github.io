import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c,d as u,a as n,b as s,e as t,f as p}from"./app-24572d8f.js";const i="/assets/meme-01-3db40cb8.jpg",r={},k=n("h1",{id:"google-maps-distance-matrix-api-開發應用筆記",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#google-maps-distance-matrix-api-開發應用筆記","aria-hidden":"true"},"#"),s(" Google Maps Distance Matrix API 開發應用筆記")],-1),d=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),v=n("p",null,[s("最近接了一個旅遊網站的案子，"),n("br"),s(" 有個需求是要將旅遊景點計算最短路徑，"),n("br"),s(" 因為有點燒腦......所以就把步驟寫下來。")],-1),q=p('<figure><img src="'+i+`" alt="除了刷題之外工作其實不太常用到" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">除了刷題之外工作其實不太常用到</figcaption></figure><h2 id="專案目標" tabindex="-1"><a class="header-anchor" href="#專案目標" aria-hidden="true">#</a> 專案目標</h2><p>給定一個旅遊景點的陣列資料，包含上車地點、遊玩景點、下車地點，<br> 經由 Google Maps Distance Matrix API 計算各景點的距離，<br> 取得景點距離矩陣後重新排序並輸出。</p><h2 id="參考資料格式" tabindex="-1"><a class="header-anchor" href="#參考資料格式" aria-hidden="true">#</a> 參考資料格式</h2><p>初始資料格式如下：<br> 起點 ID 為 0 ，終點 ID 為 -1，中間的景點 ID 是對應資料庫的景點 PK。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;豐田車站&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;974花蓮縣壽豐鄉&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AWOS農場&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;962台東縣長濱鄉八桑安路65之1號&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;鯉魚潭SUP立式划槳・獨木舟&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;972花蓮縣秀林鄉海濱路1-8號&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;多羅滿海洋賞鯨&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;970花蓮縣花蓮市華東15號&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">46</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;太魯閣布拉旦飛行傘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;971花蓮縣新城鄉33-12號&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;花蓮火車站&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;970花蓮縣花蓮市國聯一路100號&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="呼叫距離矩陣請求" tabindex="-1"><a class="header-anchor" href="#呼叫距離矩陣請求" aria-hidden="true">#</a> 呼叫距離矩陣請求</h2>`,7),b={href:"https://developers.google.com/maps/documentation/distance-matrix/start?hl=zh-tw#openapi-spec",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>以下是 PHP 的呼叫範例，<code>$waypoints</code>是一個地址陣列，<br><code>origins</code> 傳入出發地，<code>destinations</code> 傳入目的地，用<code>|</code>符號做分隔。<br> 因為終點是最後會走的路線，所以可以不需要傳入 Distance Matrix API。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 取得多個目的地的交通時間和距離的矩陣
 * rows = origins 數量
 * elements = destinations 數量
 * 會有 rows x elements 種結果
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">callDistanceMatrixAPI</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$waypoints</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 構建請求</span>
    <span class="token variable">$endpoint</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://maps.googleapis.com/maps/api/distancematrix/json&#39;</span><span class="token punctuation">;</span>
    <span class="token variable">$params</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
        <span class="token string single-quoted-string">&#39;origins&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">implode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;|&#39;</span><span class="token punctuation">,</span> <span class="token variable">$waypoints</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;destinations&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">implode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;|&#39;</span><span class="token punctuation">,</span> <span class="token variable">$waypoints</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;language&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;zh-TW&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;GOOGLEMAP_API_KEY&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 請換成您自己的 API 金鑰</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token variable">$endpoint</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;?&#39;</span> <span class="token operator">.</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 發送請求並獲取響應</span>
    <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$response</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span>  <span class="token variable">$data</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="呼叫距離矩回應" tabindex="-1"><a class="header-anchor" href="#呼叫距離矩回應" aria-hidden="true">#</a> 呼叫距離矩回應</h2><p>呼叫後得到以下回應</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;destination_addresses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;974台灣花蓮縣壽豐鄉豐田車站&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;962台灣台東縣長濱鄉八桑安&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;97253台灣花蓮縣秀林鄉海濱路1-8號&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;970台灣花蓮縣花蓮市華東&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;971台灣花蓮縣新城鄉新城&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;origin_addresses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;974台灣花蓮縣壽豐鄉豐田車站&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;962台灣台東縣長濱鄉八桑安&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;97253台灣花蓮縣秀林鄉海濱路1-8號&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;970台灣花蓮縣花蓮市華東&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;971台灣花蓮縣新城鄉新城&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rows&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 公尺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;87.6 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">87578</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 小時 40 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">6015</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;42.8 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">42755</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;59 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3560</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25.4 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">25449</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;35 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2101</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25.2 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">25249</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;39 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2351</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;87.5 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">87477</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 小時 38 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">5886</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 公尺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;122 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">121791</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2 小時 21 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">8438</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;99.8 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">99827</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 小時 53 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">6803</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;103 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">103124</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2 小時 3 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">7353</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;42.8 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">42796</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 小時 1 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">3648</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;122 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">121744</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2 小時 23 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">8593</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 公尺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22.2 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">22162</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1825</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17.7 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">17674</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1410</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;26.0 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">26006</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;37 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2214</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">100402</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 小時 56 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">6967</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22.3 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">22273</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;28 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1709</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 公尺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5.7 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">5744</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">667</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;25.4 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">25441</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;39 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2343</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;103 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">102699</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2 小時 2 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">7321</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17.7 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">17657</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;22 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1317</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5.9 公里&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">5911</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">688</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 公尺&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 分鐘&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="矩陣表格" tabindex="-1"><a class="header-anchor" href="#矩陣表格" aria-hidden="true">#</a> 矩陣表格</h2><p>上面那一大串我們整理成以下表格，表格內為距離，這樣就比較好理解矩陣</p><table><thead><tr><th></th><th>豐田車站</th><th>A-WOS 農場</th><th>鯉魚潭立槳</th><th>多羅滿賞鯨</th><th>布拉旦飛行傘</th></tr></thead><tbody><tr><td>豐田車站</td><td>0 公里</td><td>87.6 公里</td><td>42.8 公里</td><td>25.4 公里</td><td>25.2 公里</td></tr><tr><td>A-WOS 農場</td><td>87.5 公里</td><td>0 公里</td><td>122 公里</td><td>99.8 公里</td><td>103 公里</td></tr><tr><td>鯉魚潭立槳</td><td>42.8 公里</td><td>122 公里</td><td>0 公里</td><td>22.2 公里</td><td>17.7 公里</td></tr><tr><td>多羅滿賞鯨</td><td>26.0 公里</td><td>100 公里</td><td>22.3 公里</td><td>0 公里</td><td>5.7 公里</td></tr><tr><td>布拉旦飛行傘</td><td>25.4 公里</td><td>103 公里</td><td>17.7 公里</td><td>5.9 公里</td><td>0 公里</td></tr></tbody></table><h2 id="最短路徑" tabindex="-1"><a class="header-anchor" href="#最短路徑" aria-hidden="true">#</a> 最短路徑</h2><p>這邊會用到「動態規劃（dynamic programming）」的觀念來計算最短路徑。</p><p>本次演算法需要定義以下變數</p><ul><li>一個指向目前列的指針</li><li>一個結果陣列來記錄指針的順序</li></ul><p>演算規則如下</p><ul><li>除了自身景點的最短距離</li><li>已經出現在結果陣列要跳過</li><li>當陣列的數量等於景點數量就結束</li></ul><p>第一步當然是起點，也就是表格最左上角。<br> 指針會在第 1 列，接著從第一列找到除了自己以外距離最短的景點，<br> 結果是布拉旦飛行傘，此時要將指針移到第 5 列。</p><p>第二步要從布拉旦飛行傘那一列找最短路徑，<br> 結果會是多羅滿賞鯨，此時要將指針移到第 4 列</p><p>由於目前結果陣列已經有 豐田車站 和 布拉旦飛行傘<br> 多羅滿賞鯨 可用以比較的景點剩下 A-WOS 農場 和 鯉魚潭立槳<br> 引此答案就是鯉魚潭立槳 最後就是 A-WOS 農場</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 計算最佳路徑</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getShortestPath</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$matrix</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 紀錄經過的路徑初次起點為上車地點</span>
    <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 起始點為表格最左上角</span>
    <span class="token variable">$currentPath</span> <span class="token operator">=</span> <span class="token variable">$matrix</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token variable">$path</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$currentPath</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationId&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$currentPath</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationTitle&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;address&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$currentPath</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationAddress&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 第一次執行定義的索引</span>
    <span class="token variable">$currentIndex</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token variable">$minDrationValue</span> <span class="token operator">=</span> <span class="token number">999999</span><span class="token punctuation">;</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$matrix</span><span class="token punctuation">[</span><span class="token variable">$currentIndex</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$originId</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;originId&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token variable">$destinationId</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationId&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token variable">$distanceValue</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;distanceValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token variable">$durationValue</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;durationValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token variable">$isContains</span> <span class="token operator">=</span> <span class="token variable">$path</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token variable">$destinationId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$originId</span> <span class="token operator">!=</span> <span class="token variable">$destinationId</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$distanceValue</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$durationValue</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$minDrationValue</span> <span class="token operator">&gt;</span> <span class="token variable">$durationValue</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token variable">$isContains</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$minDrationValue</span> <span class="token operator">=</span> <span class="token variable">$durationValue</span><span class="token punctuation">;</span>
                <span class="token variable">$currentIndex</span> <span class="token operator">=</span> <span class="token variable">$key</span><span class="token punctuation">;</span>
                <span class="token variable">$currentPath</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token variable">$path</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;order&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$currentPath</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationId&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$currentPath</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationTitle&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;address&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$currentPath</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;destinationAddress&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$matrix</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$path</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2>`,19),g={href:"https://console.cloud.google.com/google/maps-apis/api-list",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developers.google.com/maps/documentation/distance-matrix/?hl=zh_TW",target:"_blank",rel:"noopener noreferrer"};function h(x,$){const a=e("ExternalLinkIcon");return l(),c("div",null,[k,d,v,u(" more "),q,n("p",null,[s("文件參考 "),n("a",b,[s("開始使用 Distance Matrix API"),t(a)])]),m,n("p",null,[n("a",g,[s("Google 地圖平台 API 和服務"),t(a)])]),n("p",null,[n("a",y,[s("Distance Matrix API"),t(a)])])])}const O=o(r,[["render",h],["__file","index.html.vue"]]);export{O as default};
