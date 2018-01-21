---
layout: post
title: React Native：停止搖晃你的手機啦!
feature-img: "assets/img/pexels/desk-messy.jpeg"
thumbnail: "assets/img/thumbnails/desk-messy.jpeg"
tag: [react_native, android, mac]
---
身為一個 React Native 的開發者一定了解在實機測試過程中，可能會認為自己不是在寫 APP 而是在手搖飲料店打工，因為每次做一個段落要看結果，就必須搖動手機召喚 `Developer Menu`，進行一個重新載入 APP 的動作，由於每隻 Android 手機對搖晃的感應不同會影響搖出 Menu 的難易程度，有時候會難搖到讓人想摔手機，而且搖著搖著，接口好像默默地就變鬆了，容易造成鬆脫斷線，影響 MAC 和手機間的連線品質，諸多種種確實讓人感到不便，下面介紹一個讓 React Native 開發人生變得輕鬆一點的方法。

## 用快捷鍵直接召喚 Developer Menu：

### 1. 設定 Automator Service

打開 MAC 應用程式 (Applications) 中的 Automator，按下視窗左下角的 New Document，然後點選 Service 後，按右下角的 Choose

![applications_automator_service](/assets/img/2017/02-06/applications_automator_service.jpg)

### 2. 設定 Run Shell Script

在 Automator 的視窗中，找到搜尋欄，輸入 `Run Shell Script`，找到這個 Actions，在右邊 Service receives selected 的下拉選單選擇 `no input`。接著在下方的指令框中輸入：

`/usr/local/bin/adb shell input keyevent 82`

![run_shell_script](/assets/img/2017/02-06/run_shell_script.jpg)

如果你的 adb 存在別的地方，就必須更改一下指令的路徑。

可以在終端機查詢 adb 的位置：

`$ which adb => /usr/local/bin/adb`

### 3. 儲存 Service

按下 `cmd + s` 輸入這個 Service 的名稱並儲存。

### 4. 啟動 Service

打開 System Preferences (系統偏好設定)，進到 Keyboard (鍵盤) 選擇 Shortcuts，然後捲到 General 的分類下找到你剛剛設定的 Service 的名稱，把這個 Service 勾選起來。

### 5. 設定快捷鍵

點擊二下 Service 名稱右邊的 `none`，然後按下你想要使用的快捷鍵組合，就是 `任意個 cmd / shift / control / option + 1 個字母或數字`，不要其他的快捷鍵設定相衝 (例如： cmd + c )，然後自己按得順手和記得住就可以了。

![set_service_shortcut](/assets/img/2017/02-06/set_service_shortcut.gif)

這樣召喚 Developer Menu 的快捷鍵就設定完成，之後將 APP 佈署到手機上，開發的過程中按下自己設定的快捷鍵就可以呼叫 Developer Menu 進行 Reload 或其他各種設定。

## 注意事項

- 這個方法只適用於 `Android` 手機
- 手機必須和你的 MAC 連接
- 記得要先跑過一次 `adb reverse` 指令，才能使用快捷鍵
  ```
  $ adb reverse tcp:8081 tcp:8081
  ```
- 必須在有提供 Services 的應用程式才能使用快捷鍵
  點擊應用程式名稱，列表中有 Services，可以查看裡面可以使用的 Service。
- 只在特定應用程式中使用 Service 快捷鍵
  在一開始 Automator 設定中，Service receives 如果是選擇 `any application`，在有提供 Services 的應用程式中都能用快捷鍵進行呼叫 Developer Menu，不過在某些應用程式中還是有可能失效。如果這邊選擇了某一個特定的應用程式，就表示設定的 Service 只在那個應用程式中可以使用。

![service_receives_application](/assets/img/2017/02-06/service_receives_application.jpg)

-----------------

[原文：React Native: Stop Shaking Your Phone!](https://medium.com/delivery-com-engineering/react-native-stop-shaking-your-phone-1f4863140146#.31vges2fs)

[作者：Jesse Sessler](https://medium.com/@jsessler)
