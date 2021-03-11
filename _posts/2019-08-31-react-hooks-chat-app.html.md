---
layout: post
title: React hooks：不用一百行快速勾出聊天室應用
tag: [react, hooks, chat app, socket]
feature-img: "assets/img/2019/08-31/react-hooks-chat-app.jpg"
thumbnail: "assets/img/thumbnails/2019/08_31_react-hooks-chat-app.jpg"
---
[React Hooks](https://reactjs.org/docs/hooks-intro.html) 在 React 16.8 推出之後 <del>(雖然已經有 lag 瞬間就已經來到 React 16.9.0 惹)</del>，讓工程師們又多出幾行 code 的時間可以滿足客戶的<del>磨練</del>需求啦！
這次就利用 React Hoock 來串接一個聊天室應用，看看 React Hooks 如何幫助簡化並加速整個開發過程。除了 React 自身提供的 `useState` 和 `useEffect` hook 之外，還會用到幾個開源的 React hooks 來幫忙提昇開發效率。

- 預計實做功能
	- 群組聊天室
	- 傳送與接收訊息
	- 訊息履歷
	- 使用者上線離線通知


## 準備工作

- [Open-chat server](https://github.com/akash-joshi/socket-server) 是一個使用 socket.io 和 Node.JS 技術的開源應用，這篇文章先把他想像成一個 server 端的黑盒子，主要負責處理這次 server 端的程式部份。
- 所有的 CSS 樣式會全放在一個 [ CSS ](https://github.com/fokayx/react-hooks-socket-client/blob/master/src/App.css) 檔案裡面。
- [React](https://reactjs.org/)
	- Node >= 8.10
	- npm >=5.6

```bash
npx create-react-app socket-client
#npx is not a typo — it’s a package comes with npm 5.2+
cd socket-client
npm start
```

然後在瀏覽器打開 `http://localhost:3000` 可以看到預設的歡迎首頁。接著先來認識一下幾個 APP 裡面會用到的 `hooks`。

## [useState](https://reactjs.org/docs/hooks-state.html)

`useState` 是 React 內建的 hook，用在讓 React functional component 也能擁有原本 class component 才能有的 `state`，原本想要存在 state 裡面的 data 可以輕鬆存在 `useState` 裡面，不用寫 class component 裡的 `this.state` 叭啦叭啦，而且當 state 更新的時候 `useState` 會自動重新渲染 component，兩者都能少寫好幾行的程式碼。

```javascript
import React, { useState } from 'react';
```

這次 APP 要用 `useState` 在 component 中存放使用者輸入的名稱、聊天室名稱，還有使用者名稱的 input 狀態，`nameInput` 這個主要是要確認使用者是否有填名稱，因為在這個 APP 裡面將使用者名稱 (name) 和使用者 id 綁在一起，所以一定要有填才能繼續下去，所以會宣告一個 `handleSubmit` 方法來確認使用者有沒有 name 填好填滿，如果有填 name 等於有了 id，再對 sever 發射訊號，進行建立一個使用者開啟或進入聊天室的動作，聊天室 (room) 的部份如果沒有特別填會進入一個預設的聊天室 (default)。檢查到 name 沒填的話，則會提示警告訊息：Name can't be empty <del>連名字都沒有是要怎麼聊天</del>。

```javascript
// App.js

import React, { useState } from 'react';
import './index.css';

export default () => {
  const [id, setId] = useState("");
  const [name, setNameInput] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameInput) {
      return alert("Name can't be empty");
    }
    setId(name);
    socket.emit("join", name, room);
  };

  return id !== '' ? (
    <div>Hello</div>
  ) : (
    <div style={{ textAlign: "center", margin: "30vh auto", width: "70%" }}>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          id="name"
          onChange={e => setNameInput(e.target.value.trim())}
          required
          placeholder="What is your name .."
        />
        <br />
        <input
          id="room"
          onChange={e => setRoom(e.target.value.trim())}
          placeholder="What is your room .."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
```

上面的程式碼就是用 `useState` 來存放使用者名稱和聊天室名稱，然後有使用者名稱可以透過 socket 發射事件，server 接收後就會建立帳號 (id) 和聊天室，如果沒有 id 的話視同登出，會重新生成登入的表單畫面。

## [useSocket](https://github.com/iamgyz/use-socket.io-client)

Socket.IO 是在 server 和 client 端提供即時、雙向而且是事件導向的 library， APP 會用 Socket.IO 提供的 `useStocket` 來處理和 Open-chat server 的 websocket 連線和處理收發即時訊息。因為 `useSocket` 不是 React 提供的 hook，所以要安裝 `use-socket.io-client`，才能呼叫 `useSocket`，再用 `socket` 進行一個對 server 連線的動作：

```javascript
$ npm add use-socket.io-client

// APP.js
import useSocket from  'use-socket.io-client';
const  [socket]  =  useSocket('<https://open-chat-naostsaecf.now.sh>');
// useSocket(URL) -> URL：socket server 位址

socket.connect();
console.log(socket); //打開瀏覽器的 consle 確認一下 socket 的狀態是否有正確的連線。
```

在 Socket.io client library 提供的 `socket`  可以被用在任何的 component 裡面，然後透過 `socket` 串聯 server 端的事件，也因此只要是對這個 server 有連線的 client 端都可以對 server 發射事件，那在 APP 裡面的 clent 端如果有對該事件做監聽的話就可以做相對應的處理，例如聊天室更新訊息裡面包含自己和其他人的，來自遠方的他人訊息變動，用 Socket hooks 接收就可以在 APP 這邊各自做好對應的處理。

在這次的應用中會使用幾個 socket 提供的 API，想瞭解更多可以詳閱[官方說明書](https://socket.io/docs) XD

##  [useImmer](https://github.com/immerjs/use-immer)

`useImmer` 是 [Immer](https://github.com/mweststrate/immer) 提供的 hook，所以也要先安裝 `use-immer`，`useImmer` 結合 `useState` 和  Immer 來產生 immutable state，`useImmer` 會根據原始的 state 複製一份 draft state，這樣在進行 state data 操作的時候，可以完整保留原先的 state，相對安全地進行不同的程式邏輯處理，最後再對 state 進行更新。然後 `useImmer` 基本用法和 `useState` 有 87% 像，這裡要用來處理訊息紀錄和在線使用者的部份。看一下 `useImmer` 的基本用法：

```js
$ npm add use-immer

const [data, setData] = useImmer(default_value)

setData(draftState => {
  draftState.operation();
});
// ...or
setData(draftState => newState);
// draftState 是現有 state 的複製，進行處理之後可以更新 state
```

關於這個 `setData` 其中會傳入一個 draftState 參數，就是複製於原始的 state ，這麼做可以在 function 內安全地進行操作後再更新 state。APP 會用在訊息和在線人線的更新：

```js
const [messages, setMessages] = useImmer([]);
const [online, setOnline] = useImmer([]);
```


## [useEffect](https://reactjs.org/docs/hooks-effect.html)
`useEffect` 是 React 提供的一個 hook，如果對 React 的 class lifecycle methods 有點了解的話，可以當做和 `componentDidMount`、`componentDidUpdate`、`componentWillUnmount` 這三個的功用有點類似。

`useEffect` 在 component 初始渲染的時候會作用個，然後在 React update DOM  的時候再進行動作，在 `useEffect` 裡面可以處理 component 的更新。這邊將 socket 相關的程式邏輯放到 `userEffect`，例如監聽 server 端發出的 socket 事件，然後根據事件，更新在 `useEffect` 裡面處理一些先前定義的 message hook `setMessages` 更新 message，利用 `useEffect` 可以避免 component 重新渲染的時候產生不必要的重複動作，有助於整個 APP 的效能提昇。

```js
import React,  { useState, useEffect }  from  'react';
const [socket] = useSocket('<https://open-chat-naostsaecf.now.sh>');
socket.connect();

const [messages, setMessages] = useImmer([]);
useEffect(()=>{
  socket.on('update', message => setMessages(draft => {
    draft.push(['', message]);
  }));

  socket.on('message que',(nick, message) => {
    setMessages(draft => {
      draft.push([nick, message])
    })
  });
}, 0);
```

講到這裡，先來加入一個顯示訊息和一個顯示在線人數的 component：

```javascript
const Messages = props => props.data.map(m => m[0] !== '' ? (<li key={m[0]}><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>)
: (<li key={m[1]} className="update">{m[1]}</li>));

const Online = props => props.data.map(m => <li id={m[0]}>{m[1]}</li>);
```

現在再回頭看一下先前定義的 `handleSubmit`，裡面有一個 socket emit 事件 `join`，這個是用來讓 server 端接收到 socket 的發射事件，然後不論是在 server 端還是 client 端透過 `socket.on` 的設定接收，並做出對這個事件的相對處理，在這次的 APP 裡面會用在確認有使用者名稱 (id)，再比對聊天室名稱，如果聊天室名稱相同就會連到同一個聊天室，再進行一個列出該聊天室歷史訊息的動作，如果 server 端沒有比對到聊天室名稱但有填聊天室名稱的話就新開一個聊天室，萬一聊天室名稱未填寫，就讓使用者進入預設的聊天室。<del>bug：少做了一個同樣使用者名稱的阻擋和警告w</del>

```javascript
const handleSubmit {
// ...
  socket.emit('join', name, room);
};

return id ? (
  <section style={{ display: "flex", flexDirection: "row" }}>
      <ul id="messages">
        <Messages data={messages} />
      </ul>
      <ul id="online">
        {" "}
        &#x1f310; : <Online data={online} />{" "}
      </ul>
      <div id="sendform">
        <form onSubmit={e => handleSend(e)} style={{ display: "flex" }}>
          <input id="m" onChange={e => setInput(e.target.value.trim())} />
          <button style={{ width: "75px" }} type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
) : (
// ...
```

## APP 戰神合體

看過上面的幾個 hook 的介紹之後，整個 APP 還要加上幾個小東西：

- 用 `useImmer` 再做一個在線使用者相關的 listener
- 訊息傳送的 submit handler

噹啷下面就是這次 React Hooks 聊天室的完整體現：

```js
// App.js

import React, { useState, useEffect } from 'react';
import useSocket from 'use-socket.io-client';
import { useImmer } from 'use-immer';

import './index.css';

let uniqueID = 1;
const Messages = props => props.data.map(m => m[0] !== '' ? (<li key={uniqueID++}><strong>{m[0]}</strong> : <div className="innermsg">{m[1]}</div></li>) : (<li className="update" key={uniqueID++}>{m[1]}</li>) );

const Online = props => props.data.map(m => <li id={m[0]} key={uniqueID++}>{m[1]}</li>);

export default () => {
  const [id, setId] = useState('');
  const [name, setNameInput] = useState('');
  const [room, setRoom] = useState('');
  const [input, setInput] = useState('');

  const [socket] = useSocket('https://open-chat-naostsaecf.now.sh');
  socket.connect();

  const [messages, setMessages] = useImmer([]);
  const [online, setOnline] = useImmer([]);

  useEffect(() => {
    socket.on('message que', (nick, message) => {
      setMessages(draft => {
        draft.push([nick, message])
      })
    });

    socket.on('update', message => setMessages(draft => {
      draft.push(['', message]);
    }));

    socket.on('people-list', people => {
      let newState = [];
      for (let person in people) {
        newState.push([people[person].id, people[person].nick]);
      }
      setOnline(draft=>{draft.push(...newState)});
    });

    socket.on('add-person', (nick, id) => {
      setOnline(draft => {
        draft.push([id, nick])
      })
    });

    socket.on('remove-person', id => {
      setOnline(draft => draft.filter(m => m[0] !== id))
    });

    socket.on('chat message', (nick, message) => {
      setMessages(draft => {draft.push([nick, message])})
    });
  }, 0);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      return alert("Name can't be empty");
    }
    setId(name);
    socket.emit("join", name, room);
  };

  const handleSend = e => {
    e.preventDefault();
    if(input !== ''){
      socket.emit('chat message', input, room);
      setInput('');
    }
  };

  return id ? (
    <section>
      <div id="chat">
        <ul id="messages"><Messages data={messages} /></ul>
        <div id="sendform">
          <form onSubmit={e => handleSend(e)}>
              <input id="msg" value={input} onChange={e => setInput(e.target.value.trim())} /><button type="submit">Send</button>
          </form>
        </div>
      </div>
      <ul id="online"> &#x1f310; : <Online data={online} /> </ul>
    </section>
  ) : (
    <div id="login">
      <form onSubmit={event => handleSubmit(event)}>
        <input id="name" onChange={e => setNameInput(e.target.value.trim())} required placeholder="What is your name .." /><br />
        <input id="room" onChange={e => setRoom(e.target.value.trim())} placeholder="What is your room .." /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
```

以上就是對 React Hooks 的小小初體驗，跟以前那堆 `this.state` 說掰掰！~~不用花時間寫廢扣，又可以多點廢話惹~~，如果想要再多了解 React Hooks 可以看這篇進階的文章：[Build a powerful chat application using React Hooks](https://blog.flexiple.com/build-a-powerful-chat-application-using-react-hooks/)，打造更完整的聊天室 APP。在 GitHub 有完整的 [APP 專案程式碼](https://github.com/fokayx/react-hooks-socket-client)。

Ref：

-  [Build a Chat App Using React Hooks in 100 Lines of Code](https://css-tricks.com/build-a-chat-app-using-react-hooks-in-100-lines-of-code/)
