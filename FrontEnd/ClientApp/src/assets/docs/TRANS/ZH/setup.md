
<p><a name="Contents"></a></p>
<h1>内容</h1>
<ul>
<li> <a href="about?id=setup#InstallTools">安装工具和克隆存储库</a> </li>
<li> <a href="about?id=setup#DevelopVsCode">用VsCode开发</a> </li>
<li> <a href="about?id=setup#DevelopVS">使用Visual Studio开发</a> </li>
<li> <a href="about?id=setup#DevelopOther">在其他平台上开发</a> </li>
<li> <a href="about?id=setup#Database">数据库</a> </li>
<li> <a href="about?id=setup#GoogleCloud">Google Cloud Platform</a> </li>
<li> <a href="about?id=setup#GoogleApi">Google API密钥</a> </li>
</ul><hr />
<p><a name="InstallTools"></a></p>
<h1>安装工具和克隆存储库<br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>

<ul>
<li>安装git。 <a href="https://gitforwindows.org">Windows版</a> <a href="https://git-scm.com/download/mac">Git，Mac版Git</a> </li>
<li>安装<a href="https://nodejs.org/en/download/">Node.js。</a> </li>
<li>安装<a href="https://dotnet.microsoft.com/download">.Net Core SDK。</a> </li>
<li>从<a href="https://github.com/govmeeting/govmeeting">Github</a>克隆或下载项目<a href="https://github.com/govmeeting/govmeeting">。</a>最好分叉该项目并克隆您的分叉。 </li>
</ul><hr />
<p><a name="DevelopVsCode"></a></p>
<h1>用VsCode开发<br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>
<h2>安装VsCode </h2>
<ul>
<li>安装<a href="https://code.visualstudio.com/download">Visual Studio Code</a>并启动它。 </li>
<li>使用左侧的扩展面板安装这些扩展： 
<ul>
<li>微软的“ Chrome调试器” </li>
<li> Microsoft的“ Visual Studio Code的C＃” </li>
<li> Microsoft的“ SQL Server（mssql）” </li>
<li> Gruntfuggly的“ Todo Tree”-用代码显示TODO行（可选） </li>
<li> Microsoft的“ Powershell”-用于调试Powershell构建脚本（可选） </li>
</ul></li>
</ul><h2>独立运行ClientApp </h2>
<ul>
<li>在VsCode中打开项目文件夹</li>
<li>安装NPM软件包： 
<ul>
<li>在VsCode中打开一个终端窗格</li>
<li> cd FrontEnd / ClientApp </li>
<li> npm安装</li>
</ul></li>
<li>编译并运行ClientApp 
<ul>
<li> npm开始</li>
</ul></li>
<li>在调试面板中，设置启动配置“ ClientApp Standalone” </li>
<li>按F5（调试）或Ctrl-F5（无需调试即可运行） 
<ul>
<li>或打开浏览器到localhost：4200 </li>
</ul></li>
</ul>
<p>默认情况下，ClientApp将调用存根服务，而不是调用WebApp API。 </p>
<h2>运行ClientApp和WebApp </h2>
<ul>
<li>从<a href="https://drive.google.com/drive/folders/1_I8AEnMNoPud7XZ_zIYfyGbvy96b-PyN?usp=sharing">Google云端硬盘</a>下载子文件夹<a href="https://drive.google.com/drive/folders/1_I8AEnMNoPud7XZ_zIYfyGbvy96b-PyN?usp=sharing">。</a>将它们放在同级文件夹中，命名为“ TESTDATA” </li>
<li>在FrontEnd / ClientApp / app.module.ts中，将“ isAspServerRunning”从false更改为true。 </li>
<li>建立项目： 
<ul>
<li> Ctrl-Shift-P </li>
<li>选择“任务：运行任务” </li>
<li>选择“ build-webapp”或“ Build All” </li>
</ul></li>
<li>启动ClientApp（如果尚未运行） 
<ul>
<li> cd FrontEnd / ClientApp </li>
<li> npm开始</li>
</ul></li>
<li>在调试面板中，设置启动配置“ WebApp＆ClientApp” </li>
<li>按F5（调试）或Ctrl-F5（无需调试即可运行） 
<ul>
<li> Chrome浏览器将打开，经过短暂的延迟后，ClientApp将出现在localhost：5000上。 </li>
</ul></li>
</ul><h3>笔记</h3>
<p> “ build-webapp”构建WebApp。 </p>

<p> “全部构建”将构建所有项目。与build-webapp一样，它会根据需要安装NuGet软件包。检查每个终端窗口是否有错误，并在需要时重新运行。异步还原多个NuGet软件包时存在一个已知的竞争条件错误。 </p>

<p>将“ isAspServerRunning”设置为true，将指示ClientApp调用WebApp API而不是存根服务。 </p>

<p> Google云端硬盘上的子文件夹用于测试WebApp。这些文件用于测试WorkflowApp。 </p>

<p> ClientApp由webpack-dev-server提供服务。 WebApp使用Kestrel服务器。但是Kestrel将ClientApp请求代理到webpack-dev-server。 </p>
<h2>运行WorkflowApp </h2>
<ul>
<li>从<a href="https://drive.google.com/drive/folders/1_I8AEnMNoPud7XZ_zIYfyGbvy96b-PyN?usp=sharing">Google云端硬盘</a>下载测试文件<a href="https://drive.google.com/drive/folders/1_I8AEnMNoPud7XZ_zIYfyGbvy96b-PyN?usp=sharing">。</a> </li>
<li>在调试面板中，设置启动配置“ WorkflowApp” </li>
<li>按F5（调试）或Ctrl-F5（无需调试即可运行） </li>
</ul><h3>笔记</h3>
<p> WorkflowApp处理记录文本和记录录音。转录录音需要一个<a href="about?id=setup#GoogleCloud">Google Cloud帐户。</a> </p>

<p> WorkflowApp为项目文件夹（和TESTDATA）创建一个同级文件夹，称为“ DATAFILES”。在DATAFILES中，有3个子文件夹： </p>

<ul>
<li>收到-放置在此文件夹中的所有文件将被自动处理。 </li>
<li>处理-包含要处理的工作文件夹。 </li>
<li>已完成-已完成的文件放在此处。 </li>
</ul>
<p>为了方便测试，WorkflowApp启动时会将文件从TESTDATA复制到DATAFILES / RECEIVED。 </p>
<h3>处理新录音</h3>
<p>除了Google云端硬盘上的测试文件之外，您还可以处理自己的会议记录： </p>

<ul>
<li>获取政府会议的mp4格式的录音。 </li>
<li>将该文件命名为：“ country_state_county_municipality_agency_language-code_date.mp4”。 </li>
<li>例如：“ USA_ME_LincolnCounty_BoothbayHarbor_Selectmen_en_2017-01-09.mp4”。 </li>
<li>将文件放在“ DATAFILES / RECEIVED”中</li>
<li>在BackEnd / WorkflowApp / appsettings.json中，设置以下属性： 
<ul>
<li> “ InitializeWithTestData”：否</li>
<li> “ RequireManagerApproval”：否</li>
</ul></li>
<li>运行WorkflowApp。 </li>
</ul>
<p>如果您设置了Google帐户，它将转录该录音。 </p>
<h3>处理新成绩单</h3>
<p>除了考试成绩单，您还可以自行处理。测试文件是美国宾夕法尼亚州费城市议会会议的笔录。为了处理其他成绩单格式，您将需要向ProcessTranscript_Lib添加一个方法。请参阅<a href="https://github.com/govmeeting/govmeeting/issues/93">第93期</a> 。最终目标是编写无需自定义代码即可自动处理所有或大多数格式的代码。 </p>
<hr />
<p><a name="DevelopVS"></a></p>
<h1>使用Visual Studio开发<br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>

<ul>
<li>安装免费的<a href="https://visualstudio.microsoft.com/free-developer-offers/">Visual Studio社区版。</a> </li>
<li>在安装过程中，选择“ ASP.NET”和“ .NET桌面”工作负载。 </li>
<li>安装扩展程序：（全部由Mads Kristensen提供） 
<ul>
<li> “ NPM任务运行器” </li>
<li> “命令任务运行器” </li>
<li> “降价编辑器” </li>
</ul></li>
<li>打开解决方案文件“ govmeeting.sln” </li>
</ul><h2>运行ClientApp和WebApp </h2>
<ul>
<li>从<a href="https://drive.google.com/drive/folders/1_I8AEnMNoPud7XZ_zIYfyGbvy96b-PyN?usp=sharing">Google云端硬盘</a>下载子文件夹<a href="https://drive.google.com/drive/folders/1_I8AEnMNoPud7XZ_zIYfyGbvy96b-PyN?usp=sharing">。</a>将它们放在同级文件夹中，命名为“ TESTDATA” </li>
<li>在FrontEnd / ClientApp / app.module.ts中，将“ isAspServerRunning”从false更改为true。 </li>
<li>在任务运行器资源管理器中
<ul>
<li>选择：ClientApp </li>
<li>运行“安装” </li>
<li>运行“开始” </li>
</ul></li>
<li>将启动项目设置为“ WebApp” </li>
<li>按F5（调试）或Ctrl-F5（无需调试即可运行） </li>
<li> WebApp将运行，浏览器将打开，并显示ClientApp。 </li>
</ul>
<p>注意：在Visual Studio的Angular ClientApp中设置断点存在问题。请参阅： <a href="https://github.com/govmeeting/govmeeting/issues/80">Github第80期</a> </p>
<h2>运行WorkflowApp </h2>
<ul>
<li>从Google云端硬盘下载测试文件（请参见上文） </li>
<li>打开调试面板。 </li>
<li>将启动项目设置为“ WorkflowApp” </li>
<li>按F5（调试）或Ctrl-F5（无需调试即可运行） </li>
</ul>
<p>注意：请参阅“ Visual Studio代码”下有关WorkflowApp的注释</p>
<hr />
<p><a name="DevelopOther"></a></p>
<h1>使用其他工具进行开发<br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>

<p>在您的配置文件中，将环境变量ASPNETCORE_ENVIRONMENT设置为“开发”。 WebApp和WorkflowApp使用它。 </p>
<h2>运行ClientApp </h2>
<p>执行： </p>

<ul>
<li> cd前端/ ClientApp </li>
<li> npm安装</li>
<li> npm开始</li>
</ul>
<p>在浏览器中转到localhost：4200。客户端应用程序将加载。 WebApp运行之前，某些功能将不起作用。 </p>
<h2>使用ClientApp运行WebApp </h2>
<p>执行： </p>

<ul>
<li> （执行上述操作：“构建并启动ClientApp”） </li>
<li> cd ../../Backend/WebApp </li>
<li> dotnet构建webapp.csproj </li>
<li> dotnet运行bin / debug / dotnet2.2 / webapp.dll </li>
</ul>
<p>在浏览器中转到localhost：5000。客户端应用程序将加载。 </p>
<h2>独立运行ClientApp </h2>
<ul>
<li>在app.module.ts中，将“ isAspServerRunning”从true更改为false。 </li>
<li> （执行上述操作：“构建并启动ClientApp”） </li>
</ul><h2>运行WorkflowApp </h2>
<p>执行： </p>

<ul>
<li> cd后端/ WorkflowApp </li>
<li> dotnet构建工作流程app.csproj </li>
<li> dotnet运行bin / debug / dotnet2.0 / workflowapp.dll </li>
</ul>
<p>注意：请参阅“ Visual Studio代码”下有关WorkflowApp的注释</p>
<!-- END OF README SECTION --><hr />
<p><a name="Database"></a></p>
<h1>数据库<br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>

<p>您可能不需要安装和设置数据库即可进行开发。有一些测试存根可以代替调用数据库。请参阅下面的“测试存根”。 </p>
<h2>安装提供程序</h2>
<p>如果使用的是Visual Studio或Visual Studio Code，则已经安装了Sql Server Express LocalDb提供程序。否则，请执行下面的“ LocalDb Provider安装”。 </p>
<h3> LocalDb提供程序安装</h3>
<p>转到<a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">Sql Server Express。</a>对于Windows，请下载SQL Server的“ Express”专业版。在安装过程中，选择“自定义”，然后选择“ LocalDb”。 </p>

<p> LocalDb也可用于MacO和Linux。如果您将其安装在任何一个平台上，请按照以下步骤更新本文档，然后执行“拉取请求”。 </p>
<h3>其他提供者</h3>
<p>除LocalSb之外，EF Core还支持<a href= "https://docs.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli">其他提供程序</a> （包括SqlLite）可用于开发。您将需要在startup.cs中修改DbContext设置，并在appsettings.json中修改连接字符串。 </p>
<h2>建立数据库架构</h2>
<p>该数据库是通过Entity Framework Core的“代码优先”功能构建的。它检查数据模型中的C＃类，并自动创建所有表和关系。有两个步骤：（1）创建用于执行更新的“迁移”代码，以及（2）执行更新。 </p>

<ul>
<li> cd后端/ WebApp </li>
<li> dotnet ef迁移会添加初始--project .. \ Database \ DatabaseAccess_Lib </li>
<li> dotnet ef数据库更新--project .. \ Database \ DatabaseAccess_Lib </li>
</ul><h2>探索创建的数据库</h2><h3>在VsCode中</h3>
<p>将以下内容添加到VsCode中的用户settings.json中： </p>
<pre> <code> "mssql.connections": [ { "server": "(localdb)\\mssqllocaldb", "database": "Govmeeting", "authenticationType": "Integrated", "profileName": "GMProfile", "password": "" } ],</code> </pre>
<ul>
<li>按ctrl-alt-D或按左边距的Sql Server图标。 </li>
<li>打开GMProfile连接以查看和使用数据库对象。 </li>
<li>打开“表格”。您应该看到在构建上述架构时创建的所有表。这包括用于授权的AspNetxxxx表和用于Govmeeting数据模型的表。 </li>
</ul><h3>在Visual Studio中</h3>
<ul>
<li>转到菜单项：“视图”-&gt;“ SQL Server对象资源管理器”。 </li>
<li>展开SQL Server-&gt;（localdb）\ MSSQLLocalDb-&gt;数据库-&gt; Govmeeting </li>
<li>打开“表格”。您应该看到在构建上述架构时创建的所有表。这包括用于授权的AspNetxxxx表和用于Govmeeting数据模型的表。 </li>
</ul><h3>其他平台</h3>
<p>有一个跨平台的开源<a href="https://github.com/Microsoft/sqlopsstudio?WT.mc_id=-blog-scottha">SQL Operations Studio，</a> “一个数据管理工具，可以从Windows，macOS和Linux使用SQL Server，Azure SQL DB和SQL DW。”您可以<a href="https://docs.microsoft.com/en-us/sql/sql-operations-studio/download?view=sql-server-2017&WT.mc_id=-blog-scottha">在此处免费</a>下载<a href="https://docs.microsoft.com/en-us/sql/sql-operations-studio/download?view=sql-server-2017&WT.mc_id=-blog-scottha">SQL Operations Studio。</a> </p>

<p>如果您使用此工具或其他工具来浏览SQL Server数据库，请更新这些说明。 </p>
<h2>测试存根</h2>
<p>尚未编写用于在数据库中存储/检索笔录数据的代码。因此，DatabaseRepositories_Lib改为使用静态测试数据。在WebApp / appsettings.json中，属性“ UseDatabaseStubs”设置为“ true”，告诉它调用存根例程。 </p>

<p>但是，WebApp中的用户注册和登录代码确实使用该数据库。它访问Asp.Net用户身份验证表。 WebApp根据当前登录的用户对ClientApp的API调用进行身份验证。 </p>

<p>您可以在WebApp中使用“ NOAUTH”预处理器值来绕过身份验证。使用以下方法之一： </p>

<ul>
<li>在FixasrController.cs或AddtagsController.cs中，取消注释文件顶部的“ #if NOAUTH”行。 </li>
<li>要对所有控制器禁用它，请将其添加到WebApp.csproj： </li>
</ul><pre> <code> &lt;PropertyGroup Condition="&#39;$(Configuration)|$(Platform)&#39;==&#39;Debug|AnyCPU&#39;&gt; &lt;DefineConstants&gt;NOAUTH&lt;/DefineConstants&gt; &lt;/PropertyGroup&gt;</code> </pre>
<ul>
<li>在Visual Studio中，转到WebApp属性页-&gt;构建-&gt;，然后在“条件补偿符号”框中输入NOAUTH。 </li>
</ul><hr />
<p><a name="GoogleCloud"></a></p>
<h1> Google Cloud Platform <br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>

<p>要使用Google Speech API进行语音到文本的转换，您需要一个Google Cloud Platform（GCP）帐户。对于Govmeeting中的大多数开发工作，您可以使用使用现有的测试数据。但是，如果您想抄录新唱片，则需要GCP。 Google API能够以超过120种语言和变体来转录录音。 </p>

<p> Google为开发人员提供了一个免费帐户，其中包含一个信用额（目前为300美元）。使用语音API的当前费用是每月60分钟的免费转换。之后，“增强模型”的成本（这是我们需要的）是每15秒$ 0.009。 （每小时$ 2.16） </p>

<ul>
<li>
<p>在<a href="https://cloud.google.com/free/">Google Cloud Platform上</a>开设一个帐户</p>
</li>
<li>
<p>转到<a href="http://console.cloud.google.com">Google Cloud Dashboard</a>并创建一个项目。 </p>
</li>
<li>
<p>转到<a href="http://console.developers.google.com">Google Developer&#39;s Console</a>并启用语音和云存储API </p>
</li>
<li>
<p>为该项目生成一个“服务帐户”凭证。单击开发人员控制台中的凭据。 </p>
</li>
<li>
<p>授予该帐户对项目的“编辑者”权限。点击帐户。在下一页上，单击“权限”。 </p>
</li>
<li>
<p>下载凭证JSON文件。 </p>
</li>
<li>
<p>创建一个<code>SECRETS</code>文件夹作为该克隆项目文件夹的兄弟</p>
</li>
<li>
<p>将凭证文件放入SECRETS中，并将其重命名为<code>TranscribeAudio.json</code> 。 </p>
</li>
</ul><h2>测试语音到文本的转录</h2>
<ul>
<li>
<p>在Visual Studio中将启动项目设置为<code>Backend/WorkflowApp</code> 。按F5。 </p>
</li>
<li>
<p>将一个示例MP4文件从测试数据复制（不要移动）到DATAFILES / RECEIVED。 </p>
</li>
</ul>
<p>程序现在将识别出出现了新文件并开始处理它。完成后，MP4文件将移至“ COMPLETED”。您将在sufolder中看到结果，该文件夹是在“ DATAFILES”目录中创建的。 </p>

<p>在appsettings.json中，有一个属性“ RecordingSizeForDevelopment”。当前设置为“ 180”。这将导致ProcessRecording_Lib中的转录例程仅处理记录的前180秒。 </p>
<hr />
<p><a name="GoogleApi"></a></p>
<h1> Google API密钥<br/></h1>
<p> <a href="about?id=setup#Contents">[内容]</a> </p>

<p>如果要使用或使用注册和登录过程的某些功能，则需要这些键。 </p>

<ul>
<li>在用户注册期间，需要ReCaptcha密钥才能使用ReCaptcha。可以在<a href="https://developers.google.com/recaptcha/">Google reCaptcha上</a>获得它们。 </li>
<li> OAuth 2.0凭据用于进行外部用户登录，而无需用户在网站上创建个人帐户。访问<a href="https://console.developers.google.com/">Google API控制台</a>以获取凭据，例如客户端ID和客户端密钥。 </li>
</ul>
<p>创建一个<code>SECRETS</code>文件夹作为该克隆项目文件夹的兄弟。使用以下格式在其中创建一个名为“ appsettings.Development.json”的文件。 </p>
<pre> <code>{ "ExternalAuth": { "Google": { "ClientId": "your-client-Id", "ClientSecret": "your-client-secret" } }, "ReCaptcha:SiteKey": "your-site-key", "ReCaptcha:Secret": "your-secret" }</code> </pre>
<p>编辑它以包含刚获得的密钥： </p>
<hr /><h2>测试验证码</h2>
<ul>
<li>运行WebApp项目。 </li>
<li>点击右上方的“注册”。 </li>
<li> reCaptcha选项应出现。 </li>
</ul><hr /><h2>测试Google身份验证</h2>
<ul>
<li>运行WebApp项目。 </li>
<li>点击右上方的“登录”。 </li>
<li>在“使用其他服务登录”下，选择“ Google”。 </li>
</ul>