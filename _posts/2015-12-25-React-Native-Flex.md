---
layout: post
title: React Native UI 佈局與 CSS Flex
---
## React: CSS in JS

React Native 透過 JavaScript 來做畫面樣式設定，不直接使用 CSS 具體的原因<s>是因為 JS 要統治世界了</s>可以參考這一篇[`React: CSS in JS`](https://speakerdeck.com/vjeux/react-css-in-js)。


文中 Christopher Chedeau 提到了當專案膨風到一個程度，參與的開發人員也多到認不出來的時候，CSS 會遇到的七個問題：

- Global Namesapce
- Dependencies
- Dead Code Elimination
- Minification
- Sharing Constants
- Non-deterministic Resolution
- Isolation

Christopher Chedeau 認為使用 JavaScript 能解決以上的問題，所以接下來進行一個 CSS 轉換成 JS 的動作，兩者語法差異不大。

- 屬性的設定值要用 `''` 括起來。
- React 會自動加上 `px` 所以只需要寫數值，不用加單位。
- 分號 `;` 換成逗號 `,` 。
- 使用駝峰式編碼。

```
# CSS button.css
.button {
	backgorund: #f6f7f8;
	border: 1px solid #cdced0;
	border-radius: 2px;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.button-depressed {
	background-color: #4e69a2;
	border-color: #c7c9ca;
	color: #5588ff;
}

# JS button.js
var styles = {
	container: {
		background: '#f6f7f8',
		border: '1px solid #cdced0',
		borderRadius: 2,
		boxShadow: '0 1px 1px rgba(0, 0, 0, 0.05),
	},
	depressed: {
		backgroundColor: '#4e69a2',
		borderColor: '#c7c9ca',
		color: '5588ff',
	}
};
```
-------------------------------

## React Native 與 CSS flex

在 React Native 的 UI 佈局主要是使用 `flex` 這個屬性，因為 flex 有伸縮自如的特性，非常適合用於螢幕尺寸多樣化的移動裝置，flex 多是設定在 flex container 上，也就是包在內容項目外的那一層，如有 flex item 特殊需求再進行個別的設定。目前 React Native 只支援 CSS Flex 部份的屬性設定，以下為目前能夠使用的屬性：

- flexDirection

flex items 在 flex container 中的排列方向。

![flexDirection](/assets/2015-12-25/flex-direction.jpg)

```
container: {
  flexDirection: 'row'
}

- row: 水平横向排列，預設。
- column: 垂直緃向排列。
```

- flewWrap

flex items 在 flex container 中是否換行排列。

![flexWrap](/assets/2015-12-25/flex-wrap.jpg)

```
conatiner: {
  flexWrap: wrap;
}

- wrap: flex items 在 flex container 空間不足時自動換行。
- nowrap: flex items 單行排列，不換行。
```


- justifyContent

flex items 對 flex container 水平軸的對齊方式。

![justifyContent](/assets/2015-12-25/justify-content.jpg)

```
container: {
  justifyContent: 'flex-start'
}

- flex-start: flex items 對齊 flex container 水平軸頂部(左側)。
- center: flex items 水平置中。
- flex-end: flex items 對齊 flex container 水平軸底部(右側)。
- space-between: flex items 分散對齊 flex container 水平軸。
- space-around: flex items 分散對齊 flex container，items 有同樣的間距。
```

- alignItems

flex items 對 flex container 垂直軸的對齊方式。

![alignItems](/assets/2015-12-25/align-items.jpg)

```
container: {
  alignItems: 'flex-start'
}

- flex-start: flex items 對齊 flex container 頂部。
- center: flex items 置中對齊。
- flex-end: flex itms 對齊 flex container 底部。
- stretch: flex items 垂直延伸填滿 flex container。
```

- alignSelf

alignSelf 是設定在 flex items 上，用於改變 flex container 所設定的
alignItems的屬性。出列，勇敢做自己。

![alignSelf](/assets/2015-12-25/align-self.jpg)

```
items {
  alignSelf: 'flex-end'
}

- flex-start: 單一 item flex container 垂直軸置置頂對齊。
- center: 單一 item  flex container 置中對齊。
- flex-end: 單一 item 對 flex container 垂直軸置底對齊。
- stretch: 單一 item 對 flex container 垂直軸延伸填滿。
```

- flex

flex 是用於讓 flex item 針對 flex container 所提供的空間，進行比例分配。

![flex](/assets/2015-12-25/flex.jpg)

```
itemA {
  flex: 3
},

itemB {
  flex: 1
}

以上的設定表示，flex container 提供的空間會被分成 4 等份，itemA 佔 3/4，itemB 佔 1/4。
```

以上就是 React Native 中關於 flex 屬性的說明，方便未來開發上在 UI 的空間佈局與內容項目對齊上會有比較清楚的印象。

關於網頁方面 CSS Flex 的屬性設定，在 [CSS Flex 屬性設定說明](/2015/12/24/CSS-Flex-Guide.html) 這篇文章中有更詳細的說明。


------------------
參考資料： 

 [React: CSS in JS by vjeux](https://speakerdeck.com/vjeux/react-css-in-js)

 [Reac Native Flexbox](https://facebook.github.io/react-native/docs/flexbox.html#content)

