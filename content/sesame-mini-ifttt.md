---
title: "SESAME MiniはIFTTTから操作するのがおすすめぽい"
date: "2020-01-02"
categories: 
  - "gadget"
coverImage: "DSC01823.jpeg"
---

こんにちは。スマートホームに憧れるぽとふです。

先日、鍵をスマートホーム化する

- **SESAME Mini**

を購入して設置しました。

公式アプリからも操作できますが、IFTTT から操作すると無駄な画面移動がなかったり音声連携が簡単になるのでおすすめです。

![](images/DSC01827.jpeg)

公式のアプリから鍵を操作できるのですが、

- **公式アプリから操作するのがめんどう・・・**
- **もっと便利な使い方があるのでは？**

と思うことありますよね。

使い始めて数ヶ月経過したので

- **ぽとふ家での使い方**

をご紹介します。

大したことができない一般人なので、簡単にできる方法です。

もっとこうやるといいよ！ってあればぜひコメントで教えて下さい！

## Sesame miniってなに？

![](images/DSC01821.jpeg)

家の鍵に装置を取り付けて、スマートフォンから解錠／施錠ができます。

スマートロックって言われるやつですね。

![](images/DSC01818.jpeg)

スマートロックは Sesame mini（セサミミニ）の他にも qrio（クリオ）もありますが、Sesame mini は

- **小さい**
- **サポートが強い（不具合あると交換してくれる）**
- **Amazon Alexaに対応している（APIも公開）**

![](images/DSC01814.jpeg)

特に Amazon Alexa や IFTTT 系と公式で連動できるのが強いです。

![](images/DSC01819.jpeg)

\[itemlink post\_id="1895"\]

## 我が家の使い方

まずはじめに我が家の構成です。

- **SESAME Mini + Wifiモジュール**
- **Amazon Echo を使用**
- **iPhone X を使用**

Andoroid の場合や、Google Home の場合に当てはまるのかはわからないです。

### iPhoneから操作する場合

やり方は 3つあります。

1. **公式アプリを起動して操作**
2. **ウィジェットにボタンを追加して操作（公式アプリ）**
3. **ウィジェットにボタンを追加して操作（IFTTT）**

結論から言うと、

3. **ウィジェットにボタンを追加して操作（IFTTT）**

がおすすめです。

![](images/IMG_8146-473x1024.jpeg)

なぜなら、

- **ボタン押すだけで施錠／解錠してくれるからです。**

「2」の SESAME 公式アプリのウィジェットだと、ボタンを押した後に

- **SESAME ウィジェットボタンは公式アプリが起動する**

仕様になっていてめんどいです。

IFTTT 経由だと SESAME 公式アプリはもちろん、ifttt アプリも起動せずに施錠／解錠してくれるのでちょっとした手間ですが楽になります。

なお、「1」の公式アプリから操作する場合は、公式アプリを毎回起動するって時点でもう大変ですよね。

IFTTT と連動する方法は SESAME 公式サイトにあるのでこちらをご参照ください。

\[sanko href="https://ameblo.jp/candyhouse-inc/entry-12353322034.html" title="IFTTTとSESAMEの連動方法" site="SESAME公式サイト"\]

### Amazon Echoから操作する場合

Amazon Echo から操作する方法は2つあります。

1. **Echo → SESAME 連携**
2. **Echo → IFTTT → SESAME 連携**

こちらも

2. **Echo → IFTTT → SESAME 連携**

がおすすめです。

なぜなら、

- **解錠するときにパスコードを言わなくていいから**

ですね。

SESAME 公式から Amazon Echo と連動する場合、施錠（ロック）は簡単にできるのですが、解錠はパスコードを設定する必要があります。

- **（ぼく）あれくさ、家の鍵をあけて**
- **（あくれさ）パスコードをおしえてください**
- **（ぼく）.o0（遅刻しちゃう）**

セキュリティのためだと思いますが、正直めんどくさいです。

IFTTT でパスフレーズを登録しておけばパスコードなしで解錠できます。

我が家では、Alexa の定型アクションに組み込んで使っています。

- **（ぼく）あれくさ、いってきます**
- **（あれくさ）（電気OFF**）
- **（あれくさ）（ヒーターOFF）**
- **（あれくさ）（音楽OFF**）
- **（あれくさ）（家の鍵を開ける**）
- **（あれくさ）いってらっしゃい**

って感じです。

もちろん、**セキュリティとトレードオフ**なのでご注意ください。

誰かが大声であれくさぁぁ！！！！あけろおおお！！って言ったら開いちゃうかもしれないので。（一応、鍵が開いたら iPhone に通知がきます）

ストーカーとかが盗聴器を仕掛けるシーンがあると思いますが、音声コントロールとストーカーって相性良すぎですね。

少なくとも玄関には Amazon Echo を置かないほうがいいです（もしくは声紋登録するとか）。

Alexa 連携の方法はこちら（SESAME 公式サイト）。

\[sanko href="https://ameblo.jp/candyhouse-inc/entry-12395343473.html" title="SESAMEとAlexa連携方法" site="SESAME公式サイト"\]

\[itemlink post\_id="1904"\]

## 試したけど微妙だった使い方

今のところは iPhone からの手動操作か、Alexa の音声操作で利用していますが、以下の方法は採用できませんでした。

### iPhoneを3回ノックして解錠／施錠

SESAME 公式で iPhone を 3回ノックすると操作してくれるんですが（これってとてもおもしろいですよね）、わたしには合いませんでした。

- **反応がにぶい**
- **場所特定に GPS を使っているからノックOKになるまで時間がかかる**
- **ノックがめんどい**

ノックしても操作できないことがあるのですが、そんな博打するぐらいならウィジェットから操作したほうが確実なのでお蔵入りになりました。

### GPSと連動して解錠／施錠

GPS と連動させて解錠／施錠もできます。ちゃんと動くと便利だよな～って思うのですが、

- **動作しないことが多い**
- **特に施錠で動作しないと開けっ放しなので怖い**

ってことでお蔵入りになりました。

### Bluetoothのみで利用する

![](images/DSC01829.jpeg)

ちょっと毛色が変わりますが、Wifi モジュールを利用せずに SESAME 本体で勝負している人がいるかもしれません。

わたしもそうでした （Wifiモジュールが高いので・・・） 。

- **いますぐ Wifi モジュールを購入したほうがよいです**

IFTTT はもちろん、Alexa 等の音声コントロールとも連動できないのでスマートロックの魅力が半減しちゃいますね。

本当に物理的な鍵がスマートフォンに置きかわる利点しかないのでおすすめできません。

\[itemlink post\_id="1902"\]

## Sesame miniの使い方まとめ

画面をぽちぽちするだけでできる便利な使い方をご紹介しました。

些細ですが IFTTT と連動することでちょっとしたストレスがなくなるのでおすすめです。

\[itemlink post\_id="1895"\]

\[itemlink post\_id="1902"\]

\[itemlink post\_id="1904"\]