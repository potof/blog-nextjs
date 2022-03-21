---
title: "「Lightroom Classic」から「Lightroom CC」への移行方法"
date: "2019-11-29"
categories:
  - "blog"
coverImage: "image-3.png"
---

写真を管理するために Windows マシンのローカルに写真を保存して管理する「Lightroom Classic」を使っていました。

やっぱり **iPhone から画像修正できるとブログ運営にあたって便利だなと思い直したので、「Lightroom CC」へ移行することにしました！**

基本的には Adobe 公式の移行手順を読めば OK です。

[https://helpx.adobe.com/jp/lightroom-cc/using/migrate-to-lightroom-cc.html](https://helpx.adobe.com/jp/lightroom-cc/using/migrate-to-lightroom-cc.html)

ちなみに、Sony のコンパクトデジタルカメラの「RX100M6」で取った写真を「Lightroom Classic」で RAW 現像していました。
レンズを交換せずにズームもできるし、小さいのでわたしのような写真初心者におすすめです。

\[itemlink post_id="1766"\]

## Adobe 契約内容（ライセンス）

Adobe とは「フォトプラン（20GB）」を契約しています。
今回、Lightroom CC へすべて移行することから、プランも **「Lightroom プラン（1TB）」に変更しました。**

**Lightroom Classic を使わない人には、同じ料金で容量が大きい「Lightroom プラン（1TB）」がおすすめです。**

- 「フォトプラン（20GB）」では、Lightroom Classic が利用でき、Lightroom は 20GB まで月額 980 円（税別）で利用できる。
- 「Lightroom（1TB）」では、Lightroom Classic が利用できないが、Lightroom が 1TB まで月額 980 円（税別）で利用できる。

## 移行前の事前準備をする

### カタログを最適化する

Lightroom Classic を起動して、 **「File」 > 「Optimize Catalog...」** を選択します。

![](images/image.png)

わたしの場合は 1010 枚ぐらいの写真で 5 秒程度で終わりました。  
環境によって大きく時間がかかる可能性があるのでご注意ください。

### バックアップの取得

万が一に写真が消えることが最悪なので、事前にバックアップを取得します。  
取得対象は以下のとおり。

- 写真
- カタログ
- プリセット

#### 写真のバックアップ

Lightroom に写真を「追加」していると思いますが、追加もとのディレクトリをバックアップします。

わたしの場合は以下のディレクトリをコピーした。
E:\\03_photo\\DSC-RX100M6

#### カタログのバックアップ

日頃からカタログバックアップしている人は不要ですが、わたしは取っていなかったので取得しました。

![](images/image-1.png)

メニューバーから「Edit」 > 「Catalog Settings...」を選択する

#### プリセットのバックアップ

わたしはプリセットを使っていないのでバックアップしていませんが、バックアップする人は以下のディレクトリを手動でコピーします。

```
C:Users ＜ユーザー名＞ AppDataRoamingAdobeLightroom
```

## Lightroom へ移行する

わたしの場合は試用期間中に Lightroom を利用し、ライセンス購入後は Lightroom Classic で運用していました。

そのため、 **すでに Lightroom にカタログ等が設定されていたのですが、古い断面であるため、今回は新規に作り直しをします。**

Lightroom を起動する

「ファイル」>「移行元...」>「Lightroom Classic カタログ...」を選択する

![](images/image-2.png)

「続行」を押す

![](images/image-3.png)

「続行」を押す

![](images/image-4.png)

移行元カタログを選択して「スキャンを開始」を押す

![](images/image-5.png)

Lightroom Classic は落としておくこと

「ログファイルを開く」でエラー内容を確認し、「移行を開始」を

![](images/image-6.png)

必ず「ログファイルを開く」でエラー内容を確認してください。  
見つからない写真などの詳細がでます。  
わたしの場合は問題ないのでそのまま移行を開始しました。

```
***************************
(エラーコード : NON_EXISTING_FOLDER )
***************************
NON_EXISTING_FOLDER
参照されているフォルダー
	E:/03_photo/DSC-RX100M6/JPEG/ が見つかりません

***************************
(エラーコードの詳細 : NON_EXISTING_ASSET , 数 :131 )
***************************
NON_EXISTING_ASSET
参照されているアセットが見つかりません
	E:/03_photo/DSC-RX100M6/JPEG/DSC00295.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00296.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00299.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00304.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00305.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00308.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00311.jpg
	E:/03_photo/DSC-RX100M6/JPEG/DSC00312.jpg
```

完了まで待ちます

![](images/image-7.png)

「ログファイルを開く」を押して移行結果を確認して終わりです

![](images/image-8.png)

移行元の写真が表示できたら移行完了です！

![](images/image-9.png)

## あとがき

これで iPhone の「Lightroom」アプリからブログ向けに現像できるようになりました！

これで少し楽になるといいなあ・・。
