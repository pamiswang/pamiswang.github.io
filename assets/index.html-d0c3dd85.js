import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as a,c as d,a as e,b as i,e as s,f as t}from"./app-cad7e062.js";const l={},c=e("h1",{id:"webapi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webapi","aria-hidden":"true"},"#"),i(" WebAPI")],-1),u={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},v=t(`<h1 id="加入-跨來源資源共用-cors" tabindex="-1"><a class="header-anchor" href="#加入-跨來源資源共用-cors" aria-hidden="true">#</a> 加入 跨來源資源共用（CORS）</h1><p>讀取 appsettings.json 實作 跨來源資源共用</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>	// 讀取允許列表
	string[] corsOrigins = appsettings.GetSection(&quot;CORS:AllowOrigins&quot;).Get&lt;string[]&gt;();

	// 加入具有預設原則的 CORS 和中介軟體
	builder.Services.AddCors(options =&gt;
	{
		options.AddDefaultPolicy(
			policy =&gt;
			{
				if (corsOrigins.Contains(&quot;localhost&quot;))
				{
					policy.SetIsOriginAllowed(origin =&gt; new Uri(origin).Host == &quot;localhost&quot;);
				}
				else
				{
					policy.WithOrigins(corsOrigins);
				}
				policy.AllowAnyHeader();
				policy.AllowAnyMethod();
				policy.AllowCredentials();
			});
	});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p={href:"https://docs.microsoft.com/zh-tw/aspnet/core/security/cors?view=aspnetcore-6.0",target:"_blank",rel:"noopener noreferrer"},m=t(`<h1 id="加入-api-多版本控制-整合-swagger" tabindex="-1"><a class="header-anchor" href="#加入-api-多版本控制-整合-swagger" aria-hidden="true">#</a> 加入 API 多版本控制 整合 Swagger</h1><h3 id="透過-nuget-加入-相依套件" tabindex="-1"><a class="header-anchor" href="#透過-nuget-加入-相依套件" aria-hidden="true">#</a> 透過 Nuget 加入 相依套件</h3><p>Microsoft.AspNetCore.Mvc.Versioning<br> Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer</p><h3 id="註冊並加入服務" tabindex="-1"><a class="header-anchor" href="#註冊並加入服務" aria-hidden="true">#</a> 註冊並加入服務</h3><p>參考以下程式碼區塊，加入於 <code>Program.cs</code></p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>	// 加入 API 版本控制
	builder.Services.AddApiVersioning(option =&gt;
	{
	    // 返回響應標頭中支援的版本資訊
	    option.ReportApiVersions = true;
	    // 未提供版本請請時，使用預設版號
	    option.AssumeDefaultVersionWhenUnspecified = true;
	    // 預設 API 版本號，支援時間或數字版本號
	    option.DefaultApiVersion = new ApiVersion(1, 0);
	});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>	// 加入 API 版本控制，並定義了版本號碼的格式，以及兼容 SwaggerEndpoint 加入版本號的方式
	builder.Services.AddVersionedApiExplorer(option =&gt;
	{
	    // 加入版本化的 API Explorer，其中也加入了 IApiVersionDescriptionProvider 服務
	    // 格式可參考 https://github.com/dotnet/aspnet-api-versioning/wiki/	Version-Format#custom-api-version-format-strings
	    option.GroupNameFormat = &quot;&#39;v&#39;VVV&quot;;
	    option.SubstituteApiVersionInUrl = true;
	});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>	// 將 Swagger 產生器新增至 中的 Program.cs 服務集合
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen(options =&gt;
	{
	    //使用 類別 OpenApiInfo ，修改 UI 中顯示的資訊，定義多個版本的 API 資訊，Version 需要和 	SwaggerEndpoint 對應
	    options.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;Pamis API - V1&quot;, Version = &quot;v1&quot; });
	    options.SwaggerDoc(&quot;v2&quot;, new OpenApiInfo { Title = &quot;Pamis API - V2&quot;, Version = &quot;v2&quot; });
	});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>	// 註冊 Swagger 中介軟體(Middleware) 並注入 DI 容器
	// 啟用中介軟體來提供產生的 JSON 檔和 Swagger UI
	app.UseSwagger();
	app.UseSwaggerUI(options =&gt;
	{
	    // SwaggerEndPoint 方法用於告訴SwaggerUI 請求哪個地址來獲取OpenApi JSON 資訊
	    // 設定 Swagger UI 訪問 JSON 的位置，Version 需要和 SwaggerEndpoint 對應
	    options.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;v1&quot;);
	    options.SwaggerEndpoint(&quot;/swagger/v2/swagger.json&quot;, &quot;v2&quot;);
	});

	// 啟用 API 版本控制 中介軟體 (Middleware)
	app.UseApiVersioning();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>測試用 Controllers</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiVersion(&quot;1&quot;)]
    [ApiVersion(&quot;2&quot;)]
    [Route(&quot;api/v{version:apiVersion}/[controller]&quot;)]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [MapToApiVersion(&quot;1&quot;)]
        public string GetV1()
        {
            return &quot;v1&quot;;
        }

        [HttpGet]
        [MapToApiVersion(&quot;2&quot;)]
        public string GetV2()
        {
            return &quot;v2&quot;;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),g={href:"https://www.gushiciku.cn/pl/gaDe/zh-tw",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dotnet/aspnet-api-versioning/wiki/Version-Format#custom-api-version-format-strings",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/dotnet/aspnet-api-versioning/wiki/API-Explorer-Options",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"加入-xml-註解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#加入-xml-註解","aria-hidden":"true"},"#"),i(" 加入 XML 註解")],-1),A={href:"https://docs.microsoft.com/zh-tw/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.miniasp.com/post/2019/12/21/ASP%E2%80%A4NET-Core-3-NSwag-OpenAPI-v3",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.ais.com/self-documenting-azure-functions-with-c-and-openapi-part-two/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://bryanyu.github.io/2019/12/29/AspNetCoreSwagger/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://marcus116.blogspot.com/2019/01/how-to-add-api-document-using-swagger-in-webapi.html",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"相依套件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相依套件","aria-hidden":"true"},"#"),i(" 相依套件")],-1),V=e("p",null,"MailKit -Version 3.2.0",-1);function I(x,P){const n=o("ExternalLinkIcon");return a(),d("div",null,[c,e("p",null,[i("基於 "),e("a",u,[i("ASP.NET"),s(n)]),i(" Core 6 開發的 Web API")]),v,e("p",null,[i("參考資料："),e("a",p,[i("https://docs.microsoft.com/zh-tw/aspnet/core/security/cors?view=aspnetcore-6.0"),s(n)])]),m,e("p",null,[i("參考資料："),e("a",g,[i("https://www.gushiciku.cn/pl/gaDe/zh-tw"),s(n)])]),e("p",null,[i("參考資料："),e("a",b,[i("https://github.com/dotnet/aspnet-api-versioning/wiki/Version-Format#custom-api-version-format-strings"),s(n)])]),e("p",null,[i("參考資料："),e("a",h,[i("https://github.com/dotnet/aspnet-api-versioning/wiki/API-Explorer-Options"),s(n)])]),w,e("p",null,[i("參考資料："),e("a",A,[i("https://docs.microsoft.com/zh-tw/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-6.0&tabs=visual-studio"),s(n)])]),e("p",null,[i("參考資料："),e("a",f,[i("https://blog.miniasp.com/post/2019/12/21/ASP․NET-Core-3-NSwag-OpenAPI-v3"),s(n)])]),e("p",null,[i("參考資料："),e("a",_,[i("https://www.ais.com/self-documenting-azure-functions-with-c-and-openapi-part-two/"),s(n)])]),e("p",null,[i("參考資料："),e("a",q,[i("https://bryanyu.github.io/2019/12/29/AspNetCoreSwagger/"),s(n)])]),e("p",null,[i("參考資料："),e("a",S,[i("https://marcus116.blogspot.com/2019/01/how-to-add-api-document-using-swagger-in-webapi.html"),s(n)])]),C,V])}const N=r(l,[["render",I],["__file","index.html.vue"]]);export{N as default};
