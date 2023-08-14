import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as a,e,f as p}from"./app-9d1ecdf8.js";const c={},r=p(`<h1 id="使用-vueuse-暗黑模式無法正常顯示轉場動畫特效" tabindex="-1"><a class="header-anchor" href="#使用-vueuse-暗黑模式無法正常顯示轉場動畫特效" aria-hidden="true">#</a> 使用 VueUse 暗黑模式無法正常顯示轉場動畫特效</h1><h2 id="官方範例" tabindex="-1"><a class="header-anchor" href="#官方範例" aria-hidden="true">#</a> 官方範例</h2><p>以下是官方 <code>useDark</code> 的官方範例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDark<span class="token punctuation">,</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vueuse/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> isDark <span class="token operator">=</span> <span class="token function">useDark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toggleDark <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>isDark<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在 <code>10.2.1</code> 這個版本，會發現轉場動畫特效無法正常顯示，<br> 然而在 <code>9.13.0</code> 這個版本，轉場動畫特效卻可以正常運作。<br> 雖然 github 上有些人提出的解決方式是透過降板來處理，<br> 但為了一探究竟我們將會把兩個版本的源碼做簡單的分析。</p><h2 id="源碼查看" tabindex="-1"><a class="header-anchor" href="#源碼查看" aria-hidden="true">#</a> 源碼查看</h2><p>透過 VSCode 查看 <code>useDark()</code> 的定義<br> 點開檔案 node_modules@vueuse\\core\\index.d.ts</p><h3 id="index-d-ts" tabindex="-1"><a class="header-anchor" href="#index-d-ts" aria-hidden="true">#</a> index.d.ts</h3><h4 id="usedark" tabindex="-1"><a class="header-anchor" href="#usedark" aria-hidden="true">#</a> useDark</h4><p>位於第 965 行</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * Reactive dark mode with auto data persistence.
 *
 * <span class="token keyword">@see</span> https://vueuse.org/useDark
 * <span class="token keyword">@param</span> <span class="token parameter">options</span>
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useDark</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> UseDarkOptions<span class="token punctuation">)</span><span class="token operator">:</span> vue_demi<span class="token punctuation">.</span>WritableComputedRef<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usedarkoptions" tabindex="-1"><a class="header-anchor" href="#usedarkoptions" aria-hidden="true">#</a> UseDarkOptions</h4><p>這裡可以看到 useDark 函式內可以傳入 <code>UseDarkOptions</code> 參數<br> 進一步查看 <code>UseDarkOptions</code> 可以發現是繼承 <code>UseColorModeOptions</code></p><p>位於第 938 行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface UseDarkOptions extends Omit&lt;UseColorModeOptions&lt;BasicColorSchema&gt;, &#39;modes&#39; | &#39;onChanged&#39;&gt; {
    /**
     * Value applying to the target element when isDark=true
     *
     * @default &#39;dark&#39;
     */
    valueDark?: string;
    /**
     * Value applying to the target element when isDark=false
     *
     * @default &#39;&#39;
     */
    valueLight?: string;
    /**
     * A custom handler for handle the updates.
     * When specified, the default behavior will be overridden.
     *
     * @default undefined
     */
    onChanged?: (isDark: boolean) =&gt; void;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usecolormodeoptions" tabindex="-1"><a class="header-anchor" href="#usecolormodeoptions" aria-hidden="true">#</a> UseColorModeOptions</h4><p>這邊就是關鍵！可以看到 <code>9.13.0</code> 和 <code>10.2.1</code> 的差異多了 <code>disableTransition</code> 這個選項</p><p>對應版本：<code>9.13.0</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UseColorModeOptions<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span> <span class="token operator">=</span> BasicColorSchema<span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">UseStorageOptions<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * CSS Selector for the target element applying to
   *
   * <span class="token keyword">@default</span> &#39;html&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * HTML attribute applying the target element
   *
   * <span class="token keyword">@default</span> &#39;class&#39;
   */</span>
  attribute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * The initial color mode
   *
   * <span class="token keyword">@default</span> &#39;auto&#39;
   */</span>
  initialValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Prefix when adding value to the attribute
   */</span>
  modes<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * A custom handler for handle the updates.
   * When specified, the default behavior will be overridden.
   *
   * <span class="token keyword">@default</span> undefined
   */</span>
  onChanged<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>mode<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token punctuation">,</span> <span class="token function-variable function">defaultHandler</span><span class="token operator">:</span> <span class="token punctuation">(</span>mode<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Custom storage ref
   *
   * When provided, \`useStorage\` will be skipped
   */</span>
  storageRef<span class="token operator">?</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Key to persist the data into localStorage/sessionStorage.
   *
   * Pass \`null\` to disable persistence
   *
   * <span class="token keyword">@default</span> &#39;vueuse-color-scheme&#39;
   */</span>
  storageKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Storage object, can be localStorage or sessionStorage
   *
   * <span class="token keyword">@default</span> localStorage
   */</span>
  storage<span class="token operator">?</span><span class="token operator">:</span> StorageLike<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Emit \`auto\` mode from state
   *
   * When set to \`true\`, preferred mode won&#39;t be translated into \`light\` or \`dark\`.
   * This is useful when the fact that \`auto\` mode was selected needs to be known.
   *
   * <span class="token keyword">@default</span> undefined
   */</span>
  emitAuto<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>對應版本：<code>10.2.1</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UseColorModeOptions<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span> <span class="token operator">=</span> BasicColorMode<span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">UseStorageOptions<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorMode<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * CSS Selector for the target element applying to
   *
   * <span class="token keyword">@default</span> &#39;html&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> MaybeElementRef<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * HTML attribute applying the target element
   *
   * <span class="token keyword">@default</span> &#39;class&#39;
   */</span>
  attribute<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * The initial color mode
   *
   * <span class="token keyword">@default</span> &#39;auto&#39;
   */</span>
  initialValue<span class="token operator">?</span><span class="token operator">:</span> MaybeRefOrGetter<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Prefix when adding value to the attribute
   */</span>
  modes<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * A custom handler for handle the updates.
   * When specified, the default behavior will be overridden.
   *
   * <span class="token keyword">@default</span> undefined
   */</span>
  onChanged<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>mode<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> BasicColorMode<span class="token punctuation">,</span> <span class="token function-variable function">defaultHandler</span><span class="token operator">:</span> <span class="token punctuation">(</span>mode<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> BasicColorMode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Custom storage ref
   *
   * When provided, \`useStorage\` will be skipped
   */</span>
  storageRef<span class="token operator">?</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> BasicColorSchema<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Key to persist the data into localStorage/sessionStorage.
   *
   * Pass \`null\` to disable persistence
   *
   * <span class="token keyword">@default</span> &#39;vueuse-color-scheme&#39;
   */</span>
  storageKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Storage object, can be localStorage or sessionStorage
   *
   * <span class="token keyword">@default</span> localStorage
   */</span>
  storage<span class="token operator">?</span><span class="token operator">:</span> StorageLike<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Emit \`auto\` mode from state
   *
   * When set to \`true\`, preferred mode won&#39;t be translated into \`light\` or \`dark\`.
   * This is useful when the fact that \`auto\` mode was selected needs to be known.
   *
   * <span class="token keyword">@default</span> undefined
   * <span class="token keyword">@deprecated</span> use \`store.value\` when \`auto\` mode needs to be known
   * <span class="token keyword">@see</span> https://vueuse.org/core/useColorMode/#advanced-usage
   */</span>
  emitAuto<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Disable transition on switch
   *
   * <span class="token keyword">@see</span> https://paco.me/writing/disable-theme-transitions
   * <span class="token keyword">@default</span> true
   */</span>
  disableTransition<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-cjs" tabindex="-1"><a class="header-anchor" href="#index-cjs" aria-hidden="true">#</a> index.cjs</h3><h4 id="usecolormode" tabindex="-1"><a class="header-anchor" href="#usecolormode" aria-hidden="true">#</a> useColorMode</h4><p>node_modules@vueuse\\core\\index.cjs<br> 第 1667 行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useColorMode</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    selector <span class="token operator">=</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    attribute <span class="token operator">=</span> <span class="token string">&quot;class&quot;</span><span class="token punctuation">,</span>
    initialValue <span class="token operator">=</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
    window <span class="token operator">=</span> defaultWindow<span class="token punctuation">,</span>
    storage<span class="token punctuation">,</span>
    storageKey <span class="token operator">=</span> <span class="token string">&quot;vueuse-color-scheme&quot;</span><span class="token punctuation">,</span>
    listenToStorageChanges <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    storageRef<span class="token punctuation">,</span>
    emitAuto<span class="token punctuation">,</span>
    disableTransition <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第 1698 行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>disableTransition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  style <span class="token operator">=</span> window<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;style&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> styleString <span class="token operator">=</span> <span class="token string">&quot;*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}&quot;</span><span class="token punctuation">;</span>
  style<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>styleString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>這邊可以看到 <code>disableTransition = true</code> 以及符合條件就會強制清空轉場的效果<br> 所以只要能將 <code>disableTransition = false</code> 傳入 <code>useDark()</code>就可以了</p><h2 id="結論" tabindex="-1"><a class="header-anchor" href="#結論" aria-hidden="true">#</a> 結論</h2><p>不想看長篇大論直接這樣抄</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDark<span class="token punctuation">,</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vueuse/core&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> isDark <span class="token operator">=</span> <span class="token function">useDark</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">disableTransition</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toggleDark <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span>isDark<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h1>`,32),d={href:"https://github.com/vueuse/vueuse/issues/3200",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),v={href:"https://segmentfault.com/q/1010000043785052",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),m={href:"https://paco.me/writing/disable-theme-transitions",target:"_blank",rel:"noopener noreferrer"};function b(h,g){const s=o("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[n("a",d,[a("使用【useDark, useToggle】控制 element-plus Switch 组件切换会导致动画异常"),e(s)]),u,n("a",v,[a("使用 useDark(), 发现 transition 动画失效?"),e(s)]),k,n("a",m,[a("Disable transitions on theme toggle"),e(s)])])])}const y=t(c,[["render",b],["__file","index.html.vue"]]);export{y as default};
