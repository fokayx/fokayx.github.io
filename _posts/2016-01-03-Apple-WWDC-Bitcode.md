---
layout: post
title: Apple WWDC 2015 Bitcode
tag: [Apple, WWDC, Bitcode]
---

## WWDC 2015：Bitcode

「剛泡好咖啡。對著電腦，路上無車無人，夜深無聲。失眠太久，傷害也太重，也該是到了認識 `Bitcode` 的時候了...」

Apple 的 WWDC 2015 宣佈了一個有趣的消息，但是許多的開發者並末注意到的重大改變：Bitcode。

漏掉這個消息並不意外，因為 Apple 沒有說得很多，開發者中的文件也沒有提供什麼訊息，在官方文件中就只有簡短的幾行說明：

> Bitcode
>
> Bitcode is an intermediate representation of a compiled program. Apps you upload to iTunes Connect that contain bitcode will be compiled and linked on the store. Including bitcode will allow Apple to re-optimize your app binary in the future without the need to submit a new version of your app to the store.
>
> Xcode hides symbols generated during build time by default, so they are not readable by Apple. Only if you choose to include symbols when uploading your app to iTunes Connect would the symbols be sent to Apple. You must include symbols to receive crash reports from Apple.
>
> Note: For iOS apps, bitcode is the default, but optional. For watchOS and tvOS apps, bitcode is required. If you provide bitcode, all apps and frameworks in the app bundle (all targets in the project) need to include bitcode.
> After you distribute your app using iTunes Connect, you can download the dSYMs file for the build, described in Viewing and Importing Crashes in the Devices Window.

WWDC 上 Andreas Wendker (VP of OS X platform experience) 說：Bitcode 可以讓 App Store 將 App 按照不同的裝置重新最適化，即使是在裝置尚末發佈之前。

這到底是什麼意思呢？據我們所知這個新的流程，代表如果 Apple 突然對處理器動手腳， App store 會透過 `Bitcode` 自動把 App 重新編譯，開發者不用要做任何事情 App 也可以立馬適應新的處理器。

## 咦！Bitcode 能吃嗎

首先來點背景知識。

你可能有注意到，程式工程師使用"人類可理解 (human-readable) "的程式語言編寫程式碼，然後使用一個叫做"編譯器 (compiler)" 的工具轉換成"機器可執行 (machine-executable) "的代碼。

但，事情不是就如此的簡單。

世界上有許多程式語言，程式工程師們根據程式任務需求選擇最適合的語言。另外還有許多的處理器們，每一個處理器家族都有自己的機器代碼。舉個例子，在你 MAC 中的 Intel 處理器使用的機器代碼，就跟 iPhone 的 ARM 處理器所用的不同。

在這個理論下，你可以為每一個程式語言各別寫一個編譯器對應不同的處理器，不過這樣你就必須寫超多種編譯器，而且寫編譯器超難。所以編譯器的開發者們寫了許多 `frontends` ，每一種 frontends 只對應一種程式語言，例如：Objective-C、Swift、Ruby、Python。以及許多 `backends`，每一種 backends 只對應一種機器代碼。這麼一來，當你想要使用 C 語言對應 Intel 處理器，你只要將 C 的 frontend 掛上 Intel 的 backend 進行編譯 (compiling)，程式就可以轉動了。

Bitcode 就是介於 frontend 和 backend 的中間的一種中介碼 (intermediate code)，他是程式碼透過 LLVM library 轉換而來，簡單的流程如下：每一個 `frontend compiles` 會把程式語編譯成中介碼 (intermediate code) ： `Bitcode`，然後另一邊的 `backend reads` 則會將 Bitcode 轉換成目標處理器的機器代碼。

```
Example：
Objcetive-C > [frontend] > Bitcode > [backend] > Intel (machine code)
```

## Bitcode = 翻譯年糕

採用 Bitcode 表示：Apple 在處理器的環節上擁有更大的彈性，不論是處理器整組換掉的激進革命，還是開啟處理器上的最新小功能，在未來不管 Apple 這邊對處理器進行什麼黑箱作業，開發者完全不用擔心自己的 App 因此就壞掉不通了，理論上 Bitcode 就是 App 的翻譯年糕，只要交給 App Store 之後，開發者什麼都不用做，就可以讓 App 原汁原味和新的處理器自動優化對口無縫接軌。

Apple 在 iPhone 上已經設計了自家專用的處理器，所以未來在 Mac 上這麼做，也不需要大驚小怪，而且換處理器在以前也不是沒有過，第一次是 2005 年，從 PowerPc 處理器換到 Intel ，那次 Apple 提供了轉譯套件和許多的協助，第二次是 2013 年，Apple 宣佈在 iPhone 5s 上使用 64-bit 的晶片，要求開發者改程式碼並將 App 重新編譯，每次都大動干戈逼死開發者。

Bitcode 在 watchOS 和 tvOS 的 App 是`必要 require`， iOS 雖是預設，但是為`可選 optional`。因為 Bitcode 要求所有第三方資源庫 (3rd lib) 都要支援，不然會發生編譯錯誤，所以如果開發中有用到尚未支援 Bitcode 的第三方資源庫，目前只能先手動將 "Build Settings" -> "Enable Bitcode" 設為 "NO" ，將 Bitcode 的選項關閉讓開發可以繼續進行。

某些開發者認為，不可能真的達到無痛轉換，總是會出現一些惱人的 Bugs ，而且開發者可能還難以查找出錯的原因，因為不知道 Bitcode 幫你生出了什毛病，有點令人難以捉摸。總之 Bitcode 還需要通過幾個關鍵考驗才有可能在一眼瞬間達成任務， Apple 目前也沒有提供足夠的訊息，這裡只是先給開發者一個心理準備，儘早傳好你的 Bitcode ，做好萬全準備，有傳阿婆有保庇。

參考資料：

[App Thinning (iOS, tvOS, watchOS)_ Bitcode](https://developer.apple.com/library/prerelease/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html)

[What is Apple Bitcode?](https://www.quora.com/What-is-Apple-Bitcode)
