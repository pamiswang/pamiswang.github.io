import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as o,d as v,a as n,b as e,e as i,w as c,f as r}from"./app-9034c1ad.js";const u="/assets/meme-01-2fbcd155.webp",m="/assets/2024-02-25-01-a58402a0.gif",b={},h=r('<h1 id="用主控台撰寫鍵盤腳本" tabindex="-1"><a class="header-anchor" href="#用主控台撰寫鍵盤腳本" aria-hidden="true">#</a> 用主控台撰寫鍵盤腳本</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>最近玩一些動作遊戲發現歲月真是不饒人，<br> 手變殘了反應也變慢了。</p><p>為了血壓健康千萬要慎選遊戲。</p><figure><img src="'+u+'" alt="宮崎英高的疝液" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">宮崎英高的疝液</figcaption></figure><p>尤其像是格鬥遊戲這種要尻技能表的玩法，<br> 有沒有方法不用一直操作就能打出好棒棒的連段呢？</p><p>沒錯就是按鍵精靈登場的時候囉！<br> 本著沒事找事不務正業的精神，<br> 本次就是要自己來實作簡單的自動放招。</p>',7),p=r('<h2 id="專案目標" tabindex="-1"><a class="header-anchor" href="#專案目標" aria-hidden="true">#</a> 專案目標</h2><p>本次目標為開發一個 <code>ASP.NET Framework 4.8</code> 主控台專案，<br> 監聽鍵盤的訊號，當按下對應的按鍵會執行對應的指令。</p><p>會使用 <code>ASP.NET Framework</code> 而非 <code>ASP.NET Core</code>，<br> 原因是部分功能會用到 <code>System.Windows.Forms</code> 這個命名空間，<br> 加上遊戲多半都是在 Windows 平台執行，就不用堅持跨平台了。</p><h2 id="知識儲備" tabindex="-1"><a class="header-anchor" href="#知識儲備" aria-hidden="true">#</a> 知識儲備</h2><p>由於對遊戲搞外掛破解是有風險的，<br> 像是東半球最強法務部，<br> 所以網路上的教學資源比較少。</p><p>加上每款遊戲會因為執行平台或遊戲引擎差異，<br> 比較沒有固定的破解手法。</p><p>以下是本專案比較重要的知識點</p><h3 id="hook" tabindex="-1"><a class="header-anchor" href="#hook" aria-hidden="true">#</a> Hook</h3><p>Hook 白話翻譯就是鉤子，<br> 把預定要發送的消息給「鉤」到別處，<br> 也就是攔截消息。</p><p>以遊戲操作這件事情為例：</p><ol><li>玩家按下前進的按鍵</li><li>鍵盤發送硬體訊號給作業系統</li><li>作業系統將訊息轉送到鍵盤驅動</li><li>鍵盤驅動轉換成作業系統能識別的訊號</li><li>作業系統判斷這個訊號要送進哪個程式</li><li>作業系統將消息傳給遊戲程式</li><li>遊戲程式的人物執行前進的動作</li></ol><p>而按鍵精靈的原理就是攔截特定消息後執行預定好的腳本。</p>',12),_={href:"https://learn.microsoft.com/zh-tw/windows/win32/api/winuser/nf-winuser-setwindowshookexa",target:"_blank",rel:"noopener noreferrer"},E=r(`<div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>HHOOK SetWindowsHookExA(
  [in] int       idHook,
  [in] HOOKPROC  lpfn,
  [in] HINSTANCE hmod,
  [in] DWORD     dwThreadId
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>idHook 參數就是決定要攔截的類型</p><p>通常比較常用的就是</p><ul><li>WH_KEYBOARD 2</li><li>WH_KEYBOARD_LL 13</li><li>WH_MOUSE 7</li><li>WH_MOUSE_LL 13<br> LL 是 Low Level 的縮寫<br> 代表能攔截到更底層的事件</li></ul><h3 id="模擬訊號輸入" tabindex="-1"><a class="header-anchor" href="#模擬訊號輸入" aria-hidden="true">#</a> 模擬訊號輸入</h3><p>要對遊戲下指令，就要模擬鍵盤的訊號，<br> 由於 <code>keybd_event</code> 比起其他 <code>SendMessage</code>、<code>PostMessage</code> 等函式更為底層，<br> 因為是直接模擬硬體訊號，成功率會比較高。</p>`,6),k={href:"https://learn.microsoft.com/zh-tw/windows/win32/api/winuser/nf-winuser-keybd_event",target:"_blank",rel:"noopener noreferrer"},w=r(`<div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>void keybd_event(
  [in] BYTE      bVk,
  [in] BYTE      bScan,
  [in] DWORD     dwFlags,
  [in] ULONG_PTR dwExtraInfo
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bVk 是鍵盤虛擬碼<br> System.Windows.Forms 的 Keys 列舉可以直接用</p>`,2),f=n("br",null,null,-1),x=n("br",null,null,-1),S=r(`<p>dwFlags 比較常用的是</p><ul><li>KEYEVENTF_KEYDOWN 0x0000 按下</li><li>KEYEVENTF_KEYUP 0x0002 放開</li></ul><p>由於有些遊戲對於按鍵的接收判定各有不同<br> 所以會需要多嘗試，例如可以用 <code>Thread.Sleep()</code> 創造時間差</p><h2 id="完整程式範例" tabindex="-1"><a class="header-anchor" href="#完整程式範例" aria-hidden="true">#</a> 完整程式範例</h2><div class="language-CSHARP line-numbers-mode" data-ext="CSHARP"><pre class="language-CSHARP"><code>using System;
using System.Runtime.InteropServices;
using System.Threading;
using System.Windows.Forms;

namespace HookScript
{
    internal class Program
    {

        private const int WH_KEYBOARD_LL = 13;
        private const int WM_KEYDOWN = 0x0100;
        private const int KEYEVENTF_KEYDOWN = 0x0000;
        private const int KEYEVENTF_KEYUP = 0x0002;

        private static IntPtr _hookId = IntPtr.Zero;
        private static readonly LowLevelKeyboardProc _proc = HookCallback;
        private delegate IntPtr LowLevelKeyboardProc(int nCode, IntPtr wParam, IntPtr lParam);

        #region WinAPI
        [DllImport(&quot;user32.dll&quot;, EntryPoint = &quot;keybd_event&quot;, SetLastError = true)]
        static extern void keybd_event(Keys bVk, int bScan, uint dwFlags, uint dwExtraInfo);

        [DllImport(&quot;user32.dll&quot;, CharSet = CharSet.Auto, SetLastError = true)]
        private static extern IntPtr SetWindowsHookEx(int idHook, LowLevelKeyboardProc lpfn, IntPtr hMod, uint dwThreadId);

        [DllImport(&quot;user32.dll&quot;, CharSet = CharSet.Auto, SetLastError = true)]
        [return: MarshalAs(UnmanagedType.Bool)]
        private static extern bool UnhookWindowsHookEx(IntPtr hhk);

        [DllImport(&quot;user32.dll&quot;, CharSet = CharSet.Auto, SetLastError = true)]
        private static extern IntPtr CallNextHookEx(IntPtr hhk, int nCode, IntPtr wParam, IntPtr lParam);

        [DllImport(&quot;kernel32.dll&quot;, CharSet = CharSet.Auto, SetLastError = true)]
        private static extern IntPtr GetModuleHandle(string lpModuleName);
        #endregion

        static void Main(string[] args)
        {
            // 設定 hook
            _hookId = SetHook(_proc);
            Console.WriteLine(&quot;按下 F7 執行操作，按下 F9 離開應用&quot;);
            // 保持程式持續執行
            Application.Run();
        }
        private static IntPtr SetHook(LowLevelKeyboardProc proc)
        {
            using (var curProcess = System.Diagnostics.Process.GetCurrentProcess())
            {
                using (var curModule = curProcess.MainModule)
                {
                    return SetWindowsHookEx(WH_KEYBOARD_LL, proc, GetModuleHandle(curModule.ModuleName), 0);
                }
            }
        }

        private static IntPtr HookCallback(int nCode, IntPtr wParam, IntPtr lParam)
        {
            if (nCode &gt;= 0 &amp;&amp; wParam == (IntPtr)WM_KEYDOWN)
            {
                int vkCode = Marshal.ReadInt32(lParam);

                if ((Keys)vkCode == Keys.F7)
                {
                    Console.WriteLine(&quot;F7已按下。執行操作&quot;);
                    // 下
                    Console.WriteLine(&quot;按下[下]&quot;);
                    keybd_event(Keys.S, 0x9F, KEYEVENTF_KEYDOWN, 0);
                    Thread.Sleep(100);
                    Console.WriteLine(&quot;放開[下]&quot;);
                    keybd_event(Keys.S, 0x9F, KEYEVENTF_KEYUP, 0);
                    Thread.Sleep(100);
                    // 下
                    Console.WriteLine(&quot;按下[下]&quot;);
                    keybd_event(Keys.S, 0x9F, KEYEVENTF_KEYDOWN, 0);
                    Thread.Sleep(100);
                    Console.WriteLine(&quot;放開[下]&quot;);
                    keybd_event(Keys.S, 0x9F, KEYEVENTF_KEYUP, 0);
                    Thread.Sleep(100);
                    // 必殺
                    Console.WriteLine(&quot;按下[必殺技]&quot;);
                    keybd_event(Keys.I, 0x97, KEYEVENTF_KEYDOWN, 0);
                    Thread.Sleep(100);
                    Console.WriteLine(&quot;放開[必殺技]&quot;);
                    keybd_event(Keys.I, 0x97, KEYEVENTF_KEYUP, 0);
                    Thread.Sleep(100);

                }
                else if ((Keys)vkCode == Keys.F9)
                {
                    // 取消 hook 並關閉程式
                    UnhookWindowsHookEx(_hookId);
                    Environment.Exit(0);
                }
            }
            return CallNextHookEx(_hookId, nCode, wParam, lParam);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="成果展示" tabindex="-1"><a class="header-anchor" href="#成果展示" aria-hidden="true">#</a> 成果展示</h2><figure><img src="`+m+'" alt="心情就跟佩可拉一樣開心" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">心情就跟佩可拉一樣開心</figcaption></figure><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2>',8),P={href:"https://learn.microsoft.com/zh-tw/windows/win32/inputdev/virtual-key-codes",target:"_blank",rel:"noopener noreferrer"},g=n("br",null,null,-1),y={href:"https://learn.microsoft.com/zh-tw/windows/win32/api/winuser/nf-winuser-keybd_event",target:"_blank",rel:"noopener noreferrer"},C=n("br",null,null,-1),K={href:"https://learn.microsoft.com/zh-tw/windows/win32/api/winuser/nf-winuser-setwindowshookexa",target:"_blank",rel:"noopener noreferrer"};function I(L,W){const s=d("ExternalLinkIcon"),l=d("RouterLink");return t(),o("div",null,[h,v(" more "),p,n("p",null,[e("根據官方文件 "),n("a",_,[e("SetWindowsHookExA 函式 (winuser.h)"),i(s)]),e(" 會看到語法如下")]),E,n("p",null,[e("根據官方文件 "),n("a",k,[e("keybd_event 函式 (winuser.h)"),i(s)]),e(" 會看到語法如下")]),w,n("p",null,[e("bScan 是鍵盤掃描碼"),f,e(" 這是根據不同的硬體來決定"),x,e(" 詳細可以看這篇 "),i(l,{to:"/posts/2024-02-25-keyboard-scan-code/"},{default:c(()=>[e("淺談鍵盤掃描碼")]),_:1})]),S,n("p",null,[n("a",P,[e("虛擬按鍵代碼"),i(s)]),g,n("a",y,[e("keybd_event 函式 (winuser.h)"),i(s)]),C,n("a",K,[e("SetWindowsHookExA 函式 (winuser.h)"),i(s)])])])}const T=a(b,[["render",I],["__file","index.html.vue"]]);export{T as default};
