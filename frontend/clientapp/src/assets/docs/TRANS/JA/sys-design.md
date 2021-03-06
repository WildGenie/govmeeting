<!-- Do not edit this file. It was translated by Google. -->
<style>
  img {
  max-width: 100%;
  height: auto;
}
</style><mat-card><mat-card-title class="cardtitle">設計</mat-card-title>
<markdown ngPreserveWhitespaces>

<p>以下の図は、ソフトウェアコンポーネント間の相互作用を示しています。 </p>

<ul>
<li>
<p> ClientAppは、ブラウザーで実行されるAngular Typescript単一ページアプリケーションです。ユーザーインターフェイスを提供します。 </p>
</li>
<li>
<p> WebAppは、サーバーで実行される<a href="https://github.com/aspnet/home">Asp.Net Core</a> C＃アプリケーションです。 WebApi呼び出しに応答します。 </p>
</li>
<li>
<p> WorkflowAppは、サーバー上で実行される<a href="https://github.com/dotnet/core">DotNet Core</a> C＃アプリケーションです。録音とトランスクリプトのバッチ処理を行います。また、WebAppプロセスの一部として実行されるライブラリーに変換することもできます。 </p>
</li>
<li>
<p>他のサーバーコンポーネントはDotNet Core C＃ライブラリです。 WebAppとWorkflowAppの両方で使用されます。 </p>
</li>
</ul><hr /><h2>システム設計</h2>
</markdown>
<img src="assets/images/FlowchartSystem.png">
<markdown ngPreserveWhitespaces>

<p>上の図のコンポーネントは次のとおりです。 </p>

<table style="width:100%">
<tr><th colspan="2">用途</th></tr>
<tr><td> ClientApp </td><td> Angular SPA </td></tr>
<tr><td> WebApp </td><td> Asp.Net Webサーバープロセス</td></tr>
<tr><td> WorkflowApp </td><td>ワークフローサーバー制御プロセス</td></tr>
<tr><th colspan="2">図書館</th></tr>
<tr><td> GetOnlineFiles </td><td>オンラインの筆記録と録音を取得する</td></tr>
<tr><td> ProcessRecording </td><td>音声の抽出と文字起こし。作業セグメントを作成します。 </td></tr>
<tr><td> ProcessTranscript </td><td>生の筆記録を変換する</td></tr>
<tr><td> LoadDatabase </td><td>完成した筆記録のデータをデータベースに入力する</td></tr>
<tr><td>オンラインアクセス</td><td>リモートサイトからファイルを取得するルーチン</td></tr>
<tr><td> GoogleCloudAccess </td><td> Google Cloudサービスにアクセスするためのルーチン</td></tr>
<tr><td> FileDataRepositories </td><td> JSONワークファイルデータの保存と取得</td></tr>
<tr><td> DatabaseRepositories </td><td>データベースからのモデルデータの保存と取得</td></tr>
<tr><td>データベースアクセス</td><td> Entity Frameworkを使用してデータベースにアクセスする</td></tr>
</table>
<hr /><h2> ClientAppの設計</h2>
</markdown>
<img src="assets/images/FlowchartClientApp.png">
<markdown ngPreserveWhitespaces>

<p> ClientAppの構造は、Angular Component構造によって最もよく示されます</p>

<table style="width:100%">
<tr><th colspan="2">アプリのコンポーネント</th></tr>
<tr><td>ヘッダ</td><td>ヘッダ</td></tr>
<tr><td> Sidenav </td><td>サイドバーナビゲーション</td></tr>
<tr><td>ダッシュボード</td><td>ダッシュボードコンポーネントのコンテナー</td></tr>
<tr><td>ドキュメンテーション</td><td>ドキュメントページのコンテナ</td></tr>
<tr><th colspan="2">ダッシュボードコンポーネント</th></tr>
<tr><td> Fixasr </td><td>自動音声認識テキストを修正</td></tr>
<tr><td>タグを追加する</td><td>文字起こしにタグを追加する</td></tr>
<tr><td> ViewTranscript </td><td>完成した筆記録を見る</td></tr>
<tr><td>問題</td><td>問題に関する情報を表示する</td></tr>
<tr><td>アラート</td><td>アラートに関する情報の表示と設定</td></tr>
<tr><td>職員</td><td>職員の情報を見る</td></tr>
<tr><td> （その他）） </td><td>実装するその他のコンポーネント</td></tr>
<tr><th colspan="2">サービス</th></tr>
<tr><td> VirtualMeeting </td><td>仮想会議を実行する</td></tr>
<tr><td>チャット</td><td>ユーザーチャットコンポーネント</td></tr>
</table>
<hr /><h2> WebAppデザイン</h2>
</markdown>
<img src="assets/images/FlowchartWebApp.png">
<markdown ngPreserveWhitespaces>

<p>それぞれのWeb APIは小さく、リポジトリを呼び出してデータベースまたはファイルシステムにデータを書き込んだり、データベースからデータを取得したりします。 </p>

<table style="width:100%">
<tr><th colspan="2">コントローラー</th></tr>
<tr><td> Fixasr </td><td>校正中の筆記録の最新バージョンを保存して取得します。 </td></tr>
<tr><td>タグを追加する</td><td>タグ付けされているトランスクリプトの最新バージョンを保存して取得します。 </td></tr>
<tr><td> Viewtranscript </td><td>最新の完成したトランスクリプトを取得します。 </td></tr>
<tr><td>ガブボディ</td><td>登録された政府機関のデータを保存して取得します。 </td></tr>
<tr><td>ミーティング</td><td>会議情報を保存して取得します。 </td></tr>
<tr><td>ビデオ</td><td>会議のビデオを入手してください。 </td></tr>
<tr><td>アカウント</td><td>ユーザー登録とログインを処理します。 </td></tr>
<tr><td>管理する</td><td>ユーザーは自分のプロファイルを管理できます。 </td></tr>
<tr><td>管理者</td><td>管理者はユーザー、ポリシー、クレームを管理できます</td></tr>
<tr><th colspan="2">サービス</th></tr>
<tr><td> Eメール</td><td>登録メールの確認を処理します。 </td></tr>
<tr><td>メッセージ</td><td>テキストメッセージで登録確認を処理します。 </td></tr>
</table>
<hr /><h2> WorkflowAppの設計</h2>
</markdown>
<img src="assets/images/FlowchartWorkflowApp.png">
<markdown ngPreserveWhitespaces>

<p>特定の会議のワークフローのステータスは、データベースの会議レコードに保持されます。各ワークフローコンポーネントは独立して動作します。それらは順番に呼び出され、利用可能な作業をチェックします。各コンポーネントは、利用可能な作業の基準に一致する会議についてデータベースを照会します。仕事が見つかった場合、彼らはそれを実行し、データベース内の会議のステータスを更新します。 </p>

<p>障害から回復できる堅牢なシステムを構築するには、ワークフローのステップを「トランザクション」として扱う必要があります。トランザクションは完全に完了するか、まったく完了しません。処理ステップ中に回復不可能な障害が発生した場合、その会議の状態は最後の有効な状態にロールバックされます。このコードは現在トランザクションを実装していません。 （フォローするGitubの問題） </p>

<p>コンポーネントの疑似コードを以下に示します</p>

<ul>
<li> RetreiveOnlineFiles </li>
<ul>
<li>システム内のすべての政府機関</li>
<ul>
<li>取得する会議のスケジュールを確認してください</li>
<li>録音ファイルまたはトランスクリプトファイルを取得する</li>
<li> DATAFILES \ Receivedフォルダにファイルを置きます</li>
</ul>
<li>ユーザーがアップロードすると、ファイルが受信フォルダに配置されることもあります。 </li>
</ul>
<li> ProcessReceivedFiles </li>
<ul>
<li> DATAFILES \ Received内のファイルで、データベースレコードが存在しない場合： </li>
<ul>
<li>ファイルタイプを決定する</li>
<li>データベースレコードを作成する</li>
<li> status = received、approved = falseを設定します</li>
<li>マネージャーメッセージの送信：「受信済み」 </li>
</ul>
</ul>
<li> TranscribeRecordings </li>
<ul>
<li> sourcetype = recording、status = received、approved = trueの録音の場合</li>
<ul>
<li>作業フォルダを作成</li>
<li> set = transcribing、approved = falseを設定します</li>
<li>文字起こし</li>
<li>ステータス=転写済み、承認済み= falseに設定</li>
<li>マネージャーメッセージを送信：「文字起こし」 </li>
</ul>
</ul>
<li> ProcessTranscripts </li>
<ul>
<li> sourcetype = transcript、status = received、approved = trueのトランスクリプトの場合</li>
<ul>
<li>作業フォルダを作成</li>
<li> set status = processing、approved = false </li>
<li>筆記録の処理</li>
<li>セットステータス=処理済み、承認済み= false </li>
<li>マネージャーメッセージの送信：「処理済み」 </li>
</ul>
</ul>
<li> ProofreadRecording </li>
<ul>
<li> status = transcribe / approved = trueの録音の場合</li>
<ul>
<li>作業フォルダを作成</li>
<li>ステータス=校正、承認済み= falseを設定します</li>
<li>手動校正が行われます</li>
</ul>
<li> status = proofreadingの記録の場合</li>
<ul>
<li>校正が完了したかどうかを確認します。その場合： </li>
<li> status = proofread、approved = falseに設定します</li>
<li>マネージャーメッセージを送信：「校正」 </li>
</ul>
</ul>
<li> AddTagsToTranscript </li>
<ul>
<li> status = proofread、approved = trueの記録の場合、またはstatus = processed、approved = trueの筆記録の場合</li>
<ul>
<li>作業フォルダを作成</li>
<li> status = tagging、approved = falseを設定します</li>
<li>手動タグ付けが行われます</li>
</ul>
</ul>
<ul>
<li> status = taggingのある筆記録の場合</li>
<ul>
<li>タグ付けが完了したように見えるかどうかを確認します。その場合： </li>
<li>ステータス=タグ付き、承認済み= falseに設定</li>
<li>マネージャーメッセージを送信：「タグ付け」 </li>
</ul>
</ul>
<li> LoadTranscript </li>
<ul>
<li> status = tagged、approved = trueの会議の場合
<ul>
<li> status = loading、approved = falseを設定します</li>
<li>会議の内容をデータベースに読み込む</li>
<li> status = loaded、approved = falseを設定します</li>
<li>マネージャーメッセージを送信：「ロード済み」 </li>
</ul>
</ul>
</ul><hr /><h2>ユーザーシークレット</h2>
<p>コードリポジトリに含めるべきではないユーザーシークレットは、「SECRETS」フォルダーに保持されます。次の情報が含まれています。 </p>

<ul>
<li> Google外部承認サービスのClientIdおよびClientSecret。 </li>
<li> Google ReCaptchaサービスのSiteKeyおよびSecret。 </li>
<li> Google Cloud Platformの認証情報。 </li>
<li>データベース接続文字列。 </li>
<li>管理者のユーザー名とパスワード。 </li>
</ul>
<p> SECRETSフォルダには4つのファイルが含まれている場合があります。 </p>

<ul>
<li> appsettings.Development.json </li>
<li> appsettings.Production.json </li>
<li> appsettings.Staging.json </li>
<li> TranscribeAudio.json </li>
</ul>
<p> TranscribeAudio.jsonには、Google Cloud Platformの認証情報が含まれています。他の3つのファイルには、それぞれ他のシークレットの設定が含まれている場合があります。 appsettings.Production.jsonには、本番用のすべての設定が含まれている必要があります。これらのファイルにある設定は、Server / WebApp / app.settings.jsonにある設定よりも優先されます。このファイルはリポジトリに含まれています。 </p>

<p>ローカルマシンがGoogleサービスにアクセスできるようにするには、リポジトリの場所に関連するローカルフォルダー "../SECRETS"を作成する必要があります。たとえば、ファイル "appsettings.Development。 json "を追加します。これには、Googleから取得したキーが含まれます。参照： <a href="home#google-api-keys">Google APIキー</a> </p>
<hr /><h1>ドキュメンテーション</h1>
<p>元々、このドキュメントはGithub Wikiページに保管されていました。しかし、次の2つの理由から、ページをメインプロジェクト自体に移動することが決定されました。 </p>

<ul>
<li> Github Wikiページで変更のプルリクエストを行うことはできません。これにより、コミュニティのメンバーがドキュメントを変更することが困難になります。 </li>
<li>ドキュメンテーションは、同じリポジトリ内のコードと一緒にある場合、コードとの同期が維持される可能性が高くなります。コード変更の1つのPRには、それに関連付けられたドキュメントの変更を含めることができます。 </li>
</ul>
<p>ドキュメントはMarkdownで記述され、Frontend / ClientApp / src / app / assets / docsにあります。 </p>

</markdown>

<p> &lt;/マットカード&gt; </p>
