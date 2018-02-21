---
layout: post
title: Git 初始化，完全新手設定包
tag: [Git]
---
[Git] 官網提供 Mac OSX、Windows 和 Linux/Unix 的版本，可以依照自己使用的作業系統進行下載和安裝。Git 在終端機就可以用指令進行操作，另外也有許多圖形化介面軟體 (GUI, Graphic User Interface) 可以選擇，官網上有列出一些第三方開發的圖形化介面軟體 [Git GUI Clients]，有免費也有要付費的，大部份都有跨平台的支援，可以試試看再選一款自己喜歡的用。

## 設定 Git - 終端機 (terminal) / 命令提示字元

完成安裝之後就來進行 Git 的初始化設定，打開終端機或是 Windows 的命令提示字元輸入下面兩行指令，設定使用者的名稱和 email：

```bash
$ git config --global user.name "fokayx"
$ git config --global user.email "fokayx@gmail.com"
# 請換成自己想用的名稱和信箱，輸入一行指令就要按 enter，$ 符號不用輸入
# 使用相同的指令名稱和信箱都可以進行更改，不用太緊張
```

輸入完按 enter 之後感覺也什麼事情都沒發生欸？！可以使用下面這行指令檢查是否有設定完成：

```bash
$ git config --list
user.name=fokayx
user.email=fokayx@gmail.com
```

如果之前有使用過其他 Git 圖形化介面軟體的話會再多跳出幾行相關的設定，只要確定剛剛的 user.name 和 user.email 有列出來就可以囉。

## 設定 Git - 圖形介面化軟體：SourceTree

萬一找不到終端機或者對指令輸入感到苦手的話，使用圖形化介面軟體來設定也可以，這邊以免費且 Mac 和 Windows 都有支援的 [SourceTree] 做範例。

下載安裝完打開 SourceTree 就可以進行設定，之後在偏好設定 (Preferences) 可以再更改。剛剛下載最新版的 SourceTree 安裝步驟中會要求和 [Atlassian] 做連結，看起來要登錄或是註冊一個帳號才能繼續安裝，這樣感覺有點討厭。

![sourcetree_global_user_config](/assets/img/2018/02-21/sourcetree_global_user_config.png)

Allow SourceTree to modify your global Mercurial and Git configuration files 這行打勾，然後在 Default user information 這邊輸入名稱和信箱，同樣可以完成 Git 的設定。其他圖形化介面軟體的設定大概不會相差太多。

## Git 設定檔

所有 Git 相關設定，預設會紀錄在自己帳號下的 .gitconfig 這個檔案，使用文字編輯器打開來一樣可以看到剛剛使用終端機或是 SourceTree 所作的設定：

檔案位置：~/.gitconfig

```
...
[user]
  name = fokayx
  email = fokayx@gmail.com
```

[Git]: https://git-scm.com/downloads
[Git GUI Clients]: https://git-scm.com/downloads/guis
[SourceTree]: https://www.sourcetreeapp.com/
[Atlassian]: https://id.atlassian.com/login
