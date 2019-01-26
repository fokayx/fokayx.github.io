---
layout: post
title: React Native：終結 Debug 的雪克人生 - iOS 篇♪
feature-img: "assets/img/2018/06-10/react_native_shaking_life.png"
thumbnail: "assets/img/thumbnails/2018/06_10_react_native_shaking_life.png"
## tag: [react_native, multiple_touch, iOS, mac, android]
---
## iOS 篇 - 多點觸控招召喚 Developer Menu：
在之前的文章分享過在 mac 開發 React Native 應用的時候，可以設定快捷鍵來呼叫 android 手機的 Developer Menu (甩~)，目前了解這個方法是無法在 iOS 系統上使用的，残念ですね〜把二、三萬的 iPhone 拿來雪克萬一手滑也是挺讓人痛心的，說不定一個剛好螢幕就裂了呢 (笑)，iOS 這邊不能只好讓 React Native 那邊想想辦法，生命總是會找到出口的 ♥ 接下來只要在專案最初開始的檔案 `EX: index.js` 加入幾行的程式碼，利用多點觸控做為事件觸發一樣可以把 Developer Menu 叫出來囉！

```js
import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    PanResponder,
    NativeModules
} from 'react-native';
import App from './src/native/app.native'

export default class devMenuEverywhere extends Component {
  DevMenuTrigger = (children) => {
    const {DevMenu} = NativeModules;
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        if (gestureState.numberActiveTouches === 3) {
          DevMenu.show();
        }
      },
    });
    return <View style={{flex: 1}} {...panResponder.panHandlers}>{children}</View>
  };

  render() {
    return (
      this.DevMenuTrigger(<App/>)
    );
  }
}
AppRegistry.registerComponent('reactNativeEverywhere', () => devMenuEverywhere);
```

以上加完之後，在 iPhone 上使用三點觸碰就能開啟 Developer Menu，不必再把 iPhone 放在空中甩，真是一件好事 :)

同場加映：[React Native：停止搖晃你的手機啦 - Android 篇](/2017/02/06/RN-Stop-Shaking-Your-Phone.html)

-----------------
[REF：Open iOS Developer Menu programmatically / command](https://stackoverflow.com/questions/46101581/open-ios-developer-menu-programmatically-command)
