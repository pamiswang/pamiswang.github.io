import{_ as c}from"./20023-08-07-01-6c9dd1ab.js";import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as v,c as m,a as e,b as n,e as i,d as b,w as s,f as d}from"./app-548ff9d1.js";const p="/assets/meme-01-7fcc5a5b.png",h="/assets/2023-08-09-01-a37a995d.png",g="/assets/2023-08-09-02-88704177.png",_="/assets/2023-08-09-03-dd411eb2.png",f="/assets/2023-08-09-04-0a906a6d.png",C="/assets/2023-08-09-05-9b0bc489.png",A="/assets/2023-08-09-06-bce8e398.png",x="/assets/2023-08-09-07-3ac5bd05.png",S="/assets/2023-08-09-08-f3945fcd.png",w="/assets/2023-08-09-09-46aade75.png",y="/assets/2023-08-09-10-b3f16f3e.png",k={},N={id:"asp-net-core-6-web-api-swagger",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#asp-net-core-6-web-api-swagger","aria-hidden":"true"},"#",-1),M={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),P=e("p",null,[n("一份好的 API 文件應該要有明確充足的說明，"),e("br"),n(" 不過在台灣一條龍開發的文化行之有年，要完善文件說明相對不容易。")],-1),I=e("p",null,"工程師討厭的事情：「討厭別人不寫文件，討厭自己要寫文件」。",-1),L=e("p",null,"所以透過好用的工具配合程式註解產出文件可以有效降低大家的痛苦。",-1),B=e("figure",null,[e("img",{src:p,alt:"鬼島工程師ㄉ日常",tabindex:"0",loading:"lazy"}),e("figcaption",{style:{"font-size":"1rem"}},"鬼島工程師ㄉ日常")],-1),G=d('<h2 id="swagger-套件安裝" tabindex="-1"><a class="header-anchor" href="#swagger-套件安裝" aria-hidden="true">#</a> Swagger 套件安裝</h2><p>使用 Swagger 要安裝 <code>Swashbuckle.AspNetCore</code> 套件，包含以下相依套件。</p><ul><li>Microsoft.Extensions.ApiDescription.Server</li><li>Swashbuckle.AspNetCore.Swagger</li><li>Swashbuckle.AspNetCore.SwaggerGen</li><li>Swashbuckle.AspNetCore.SwaggerUI</li></ul><p>以下有兩種方式安裝，最懶人的還是直接選專案範本。</p><h3 id="選擇專案範本" tabindex="-1"><a class="header-anchor" href="#選擇專案範本" aria-hidden="true">#</a> 選擇專案範本</h3><p>通常使用 Visual Studio 選擇 <code>ASP.NET CORE Web API</code> 作為專案範本，<br> 就會自動把該安裝的 Swagger 相關套件裝好。</p><figure><img src="'+h+'" alt="Visual Studio 2022 的畫面" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">Visual Studio 2022 的畫面</figcaption></figure><h3 id="自行選擇安裝" tabindex="-1"><a class="header-anchor" href="#自行選擇安裝" aria-hidden="true">#</a> 自行選擇安裝</h3>',8),W={href:"https://www.nuget.org/packages/Swashbuckle.AspNetCore",target:"_blank",rel:"noopener noreferrer"},z=e("br",null,null,-1),D=e("p",null,[n("最簡單的方式可以用 NuGet 套件管理員搜尋 "),e("code",null,"Swashbuckle.AspNetCore"),n(" 自行安裝。")],-1),F=e("figure",null,[e("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),T=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("Install-Package Swashbuckle.AspNetCore "),e("span",{class:"token parameter variable"},"-Version"),n(),e("span",{class:"token number"},"6.5"),n(`.0
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),X=e("figure",null,[e("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),V=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("dotnet "),e("span",{class:"token function"},"add"),n(" package Swashbuckle.AspNetCore "),e("span",{class:"token parameter variable"},"--version"),n(),e("span",{class:"token number"},"6.5"),n(`.0
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),R=e("p",null,"要注意指向專案的目錄，不然會出事的。",-1),O=e("figure",null,[e("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),U=d(`<h2 id="新增和設定-swagger-中介軟體" tabindex="-1"><a class="header-anchor" href="#新增和設定-swagger-中介軟體" aria-hidden="true">#</a> 新增和設定 Swagger 中介軟體</h2><p>將 Swagger 產生器新增至 中的 <code>Program.cs</code> 服務集合：</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// Swagger 產生器新增到服務容器
builder.Services.AddSwaggerGen();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>Program.cs</code> 啟用啟用中介軟體產生 JSON 文件與 Swagger UI</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>var app = builder.Build();
// 如果限定開發環境才能看文件
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果程式沒寫錯，執行起來畫面就會像是這樣。</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="xml-註解" tabindex="-1"><a class="header-anchor" href="#xml-註解" aria-hidden="true">#</a> XML 註解</h2><p>讓程式內的註解轉換成 XML 格式，渲染到 Swagger 文件畫面，豐富整個文件的說明。</p><h3 id="啟用專案-xml-註解" tabindex="-1"><a class="header-anchor" href="#啟用專案-xml-註解" aria-hidden="true">#</a> 啟用專案 XML 註解</h3><p>想要使用 XML 註解要先啟用專案 XML 註解，兩個方式做設定。</p>',11),H=e("p",null,[n("滑鼠直接點擊就會跳出來了，想用記事本打開改也是可以的。"),e("br"),n(" 將 GenerateDocumentationFile 標籤加入 PropertyGroup 內。")],-1),$=e("div",{class:"language-XML line-numbers-mode","data-ext":"XML"},[e("pre",{class:"language-XML"},[e("code",null,`<PropertyGroup>
  <GenerateDocumentationFile>true</GenerateDocumentationFile>
</PropertyGroup>
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("figure",null,[e("img",{src:C,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),J=e("p",null,"選中專案右鍵後選擇屬性功能列表，找到建置 > 輸出的分類項目下找到後打勾即可。",-1),K=e("figure",null,[e("img",{src:A,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Q=d('<h3 id="隱藏警告" tabindex="-1"><a class="header-anchor" href="#隱藏警告" aria-hidden="true">#</a> 隱藏警告</h3><p>通常這時候會發現下面跳一堆錯誤清單，看了會很煩躁，<br> 所以要設定忽略警告讓編輯器好好閉嘴。</p><figure><img src="'+x+`" alt="強迫症484要發作了阿" tabindex="0" loading="lazy"><figcaption style="font-size:1rem;">強迫症484要發作了阿</figcaption></figure><p>就像上面一樣打開專案設定，把 NoWarn 標籤加入 PropertyGroup 內</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;PropertyGroup&gt;
  &lt;GenerateDocumentationFile&gt;true&lt;/GenerateDocumentationFile&gt;
  &lt;NoWarn&gt;$(NoWarn);1591&lt;/NoWarn&gt;
&lt;/PropertyGroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="設定文件註解" tabindex="-1"><a class="header-anchor" href="#設定文件註解" aria-hidden="true">#</a> 設定文件註解</h3><p>在 <code>Program.cs</code> 內參考並加入下方片段</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =&gt;
{
    // 啟用 XML 註解與對應 XML 檔案
    var xmlFilename = $&quot;{Assembly.GetExecutingAssembly().GetName().Name}.xml&quot;;
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加入-xml-註解" tabindex="-1"><a class="header-anchor" href="#加入-xml-註解" aria-hidden="true">#</a> 加入 XML 註解</h3><p>上面設定完之後就是要來試試看產生註解<br> 使用 Visual Studio 加入 XML 註解有三種方式</p><ul><li><p>第一種最方便，連續 <code>///</code>。</p></li><li><p>第二種是從功能表上<code>編輯</code> &gt; <code>IntelliSense</code> &gt; <code>插入註解</code>。</p></li><li><p>第三種是<code>右鍵</code> &gt; <code>程式碼片段</code> &gt; <code>插入註解</code>。</p></li></ul><h3 id="撰寫範例" tabindex="-1"><a class="header-anchor" href="#撰寫範例" aria-hidden="true">#</a> 撰寫範例</h3><p>這裡以官方範本的天氣示範</p><p><code>WeatherForecastController.cs</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.AspNetCore.Mvc;
using Web_API.Models;

namespace Web_API.Controllers
{
    [ApiController]
    [Route(&quot;[controller]&quot;)]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        &quot;Freezing&quot;, &quot;Bracing&quot;, &quot;Chilly&quot;, &quot;Cool&quot;, &quot;Mild&quot;, &quot;Warm&quot;, &quot;Balmy&quot;, &quot;Hot&quot;, &quot;Sweltering&quot;, &quot;Scorching&quot;
    };

        private readonly ILogger&lt;WeatherForecastController&gt; _logger;

        public WeatherForecastController(ILogger&lt;WeatherForecastController&gt; logger)
        {
            _logger = logger;
        }


        /// &lt;summary&gt;
        /// 取得天氣資料
        /// &lt;/summary&gt;
        /// &lt;returns&gt; 產生 5 筆天氣資料 &lt;/returns&gt;
        [HttpGet(Name = &quot;GetWeatherForecast&quot;)]
        public IEnumerable&lt;WeatherForecast&gt; Get()
        {
            return Enumerable.Range(1, 5).Select(index =&gt; new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>WeatherForecast.cs</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System.ComponentModel.DataAnnotations;

namespace Web_API.Models
{
    public class WeatherForecast
    {
        /// &lt;summary&gt;
        /// 日期
        /// &lt;/summary&gt;
        [Required]
        public DateTime Date { get; set; }

        /// &lt;summary&gt;
        /// 攝氏溫度
        /// &lt;/summary&gt;
        public int TemperatureC { get; set; }

        /// &lt;summary&gt;
        /// 華式溫度
        /// &lt;/summary&gt;
        public int TemperatureF =&gt; 32 + (int)(TemperatureC / 0.5556);

        /// &lt;summary&gt;
        /// 天氣總結
        /// &lt;/summary&gt;
        public string? Summary { get; set; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示" aria-hidden="true">#</a> 效果展示</h3><p>對應的結果呈現。</p><figure><img src="`+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="屬性標籤註解" tabindex="-1"><a class="header-anchor" href="#屬性標籤註解" aria-hidden="true">#</a> 屬性標籤註解</h2><p>當我們需要做資料驗證時可以用內建的屬性標籤(Attribute)，<br> 例如必填欄位、驗證信箱、長度上限、數字範圍等......，<br> 很多基本的驗證在官方提供的列表可以找到直接套用。</p><p>使用以下命名空間來套用各類屬性標籤</p><ul><li><code>System.ComponentModel</code></li><li><code>System.ComponentModel.DataAnnotations</code></li></ul><p>可用的屬性標籤請參考官方文件。 <a href="#%E5%B1%AC%E6%80%A7%E8%A8%BB%E8%A7%A3%E5%8F%AF%E7%94%A8%E5%88%97%E8%A1%A8">跳轉到參考資料</a></p><h3 id="撰寫範例-1" tabindex="-1"><a class="header-anchor" href="#撰寫範例-1" aria-hidden="true">#</a> 撰寫範例</h3><p>建立一個書籍的控制器與資料模型為範例</p><p><code>BookController.cs</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.AspNetCore.Mvc;

namespace Web_API.Controllers
{
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    public class BookController : ControllerBase
    {
        [HttpPost]
        public Book Post(Book book)
        {
            return book;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Book.cs</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Web_API
{
    public class Book
    {
        /// &lt;summary&gt;
        /// 書籍編號
        /// &lt;/summary&gt;
        [Required]
        public long Id { get; set; }

        /// &lt;summary&gt;
        /// 書籍名稱
        /// &lt;/summary&gt;
        [Required]
        [DefaultValue(&quot;貓物語&quot;)]
        public string Name { get; set; } = string.Empty;

        /// &lt;summary&gt;
        /// 建議售價
        /// &lt;/summary&gt;
        [Required]
        [DefaultValue(1000)]
        [Range(1000, 9999)]
        public int Price { get; set; }

        /// &lt;summary&gt;
        /// 作者姓名
        /// &lt;/summary&gt;
        [DefaultValue(&quot;西尾維新&quot;)]
        [StringLength(8)]
        public string Author { get; set; } = string.Empty;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示-1" tabindex="-1"><a class="header-anchor" href="#效果展示-1" aria-hidden="true">#</a> 效果展示</h3><p>有紅色米號的就是必填欄位，其他的欄位驗證規則也會出現在資料結構說明，<br> 這樣使用 API 的人可以更了解使用的方式與限制。</p><figure><img src="`+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="自訂屬性標籤" tabindex="-1"><a class="header-anchor" href="#自訂屬性標籤" aria-hidden="true">#</a> 自訂屬性標籤</h2><h3 id="套件介紹" tabindex="-1"><a class="header-anchor" href="#套件介紹" aria-hidden="true">#</a> 套件介紹</h3>',36),Y=e("code",null,"Swashbuckle.AspNetCore.Annotations",-1),Z=e("br",null,null,-1),ee={href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore#swashbuckleaspnetcoreannotations",target:"_blank",rel:"noopener noreferrer"},ne=e("h3",{id:"套件安裝",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#套件安裝","aria-hidden":"true"},"#"),n(" 套件安裝")],-1),ie=e("br",null,null,-1),ae=e("code",null,"Swashbuckle.AspNetCore.Annotations",-1),se=e("br",null,null,-1),re={href:"https://www.nuget.org/packages/Swashbuckle.AspNetCore.Annotations",target:"_blank",rel:"noopener noreferrer"},le=d(`<h3 id="啟用套件" tabindex="-1"><a class="header-anchor" href="#啟用套件" aria-hidden="true">#</a> 啟用套件</h3><p>在 <code>Program.cs</code> 內參考並加入下方片段</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =&gt;
{
    options.EnableAnnotations();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撰寫範例-2" tabindex="-1"><a class="header-anchor" href="#撰寫範例-2" aria-hidden="true">#</a> 撰寫範例</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Web_API.Controllers
{
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [SwaggerTag(&quot;書籍的控制器&quot;)]
    public class BookController : ControllerBase
    {
        [HttpPost]
        [SwaggerOperation(Summary = &quot;回傳輸入的書籍資料&quot;, Description = &quot;需要權限&quot;)]
        public Book Post(Book book)
        {
            return book;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果展示-2" tabindex="-1"><a class="header-anchor" href="#效果展示-2" aria-hidden="true">#</a> 效果展示</h3><p><code>SwaggerTag</code> 出現於紅框，<code>SwaggerOperation</code>出現於藍框。</p><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料" aria-hidden="true">#</a> 參考資料</h2><h3 id="swagger-入門" tabindex="-1"><a class="header-anchor" href="#swagger-入門" aria-hidden="true">#</a> Swagger 入門</h3>',11),de={href:"https://learn.microsoft.com/zh-tw/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"},te=e("h3",{id:"使用-xml-註解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-xml-註解","aria-hidden":"true"},"#"),n(" 使用 XML 註解")],-1),oe={href:"https://learn.microsoft.com/zh-tw/dotnet/core/project-sdk/msbuild-props#generatedocumentationfile",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://learn.microsoft.com/zh-tw/dotnet/csharp/language-reference/xmldoc/recommended-tags",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://learn.microsoft.com/zh-tw/visualstudio/ide/reference/generate-xml-documentation-comments?view=vs-2022",target:"_blank",rel:"noopener noreferrer"},ve=e("h3",{id:"屬性註解可用列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#屬性註解可用列表","aria-hidden":"true"},"#"),n(" 屬性註解可用列表")],-1),me={href:"https://learn.microsoft.com/zh-tw/dotnet/api/system.componentmodel?view=net-6.0",target:"_blank",rel:"noopener noreferrer"},be={href:"https://learn.microsoft.com/zh-tw/dotnet/api/system.componentmodel.dataannotations?view=net-6.0",target:"_blank",rel:"noopener noreferrer"},pe=e("h3",{id:"自訂屬性註解可用列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自訂屬性註解可用列表","aria-hidden":"true"},"#"),n(" 自訂屬性註解可用列表")],-1),he={href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore#swashbuckleaspnetcoreannotations",target:"_blank",rel:"noopener noreferrer"};function ge(_e,fe){const a=o("ExternalLinkIcon"),t=o("Tabs");return v(),m("div",null,[e("h1",N,[q,n(),e("a",M,[n("ASP.NET"),i(a)]),n(" Core 6 Web API Swagger")]),E,P,I,L,B,b(" more "),G,e("p",null,[n("如果要手動安裝可以到 "),e("a",W,[n("Swashbuckle.AspNetCore 的 NuGet 頁面"),i(a)]),n("，"),z,n(" 查看各種安裝方式以及專案對應的套件版本。")]),i(t,{id:"65",data:[{id:"套件管理員"},{id:"套件管理主控台"},{id:".NET Core CLI"}],active:0},{title0:s(({value:r,isActive:l})=>[n("套件管理員")]),title1:s(({value:r,isActive:l})=>[n("套件管理主控台")]),title2:s(({value:r,isActive:l})=>[n(".NET Core CLI")]),tab0:s(({value:r,isActive:l})=>[D,F]),tab1:s(({value:r,isActive:l})=>[T,X]),tab2:s(({value:r,isActive:l})=>[V,R,O]),_:1},8,["data"]),U,i(t,{id:"119",data:[{id:"編輯專案文件"},{id:"專案屬性設定"}],active:0},{title0:s(({value:r,isActive:l})=>[n("編輯專案文件")]),title1:s(({value:r,isActive:l})=>[n("專案屬性設定")]),tab0:s(({value:r,isActive:l})=>[H,$,j]),tab1:s(({value:r,isActive:l})=>[J,K]),_:1}),Q,e("p",null,[Y,n(" 套件提供更多客製屬性標籤，讓 API 文件更加清晰豐富。"),Z,n(" 可用的自訂屬性標籤與使用範例可參考"),e("a",ee,[n("官方文件"),i(a)]),n("。")]),ne,e("p",null,[n("可參考上方的套件安裝方式，"),ie,n(" 使用 NuGet 套件管理員搜尋 "),ae,n(" 自行安裝。"),se,n(" 或是到 "),e("a",re,[n("Swashbuckle.AspNetCore.Annotations 的 NuGet 頁面"),i(a)]),n("，裡面有指令的安裝教學。")]),le,e("p",null,[e("a",de,[n("Swashbuckle 與 ASP.NET Core 使用者入門"),i(a)])]),te,e("p",null,[e("a",oe,[n(".NET SDK 專案的 MSBuild 參考"),i(a)])]),e("p",null,[e("a",ce,[n("建議用於 C# 文件註解的 XML 標記"),i(a)])]),e("p",null,[e("a",ue,[n("如何：在文件產生中插入 XML 註解"),i(a)])]),ve,e("p",null,[e("a",me,[n("System.ComponentModel 命名空間"),i(a)])]),e("p",null,[e("a",be,[n("System.ComponentModel.DataAnnotations 命名空間"),i(a)])]),pe,e("p",null,[e("a",he,[n("Swashbuckle.AspNetCore.Annotations"),i(a)])])])}const Se=u(k,[["render",ge],["__file","index.html.vue"]]);export{Se as default};
