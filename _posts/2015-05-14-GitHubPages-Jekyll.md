---
layout: post
title: GitHub Pages + Jekyll 快速把 Markdown 文檔變成部落格
tag: [GitHub_pages, Jekyll, Markdown]
---

獻身給程式之後，有時會寫一些程式的新手文，因為是程式相關的文章，難免會有程式碼的片段，當時為了要在文章中包藏程式碼，開始使用 Markdown 語法格式寫東西。

那麼，有了這些 Markdown 文檔之後，要發佈在哪裡給大家觀看呢？使用 GitHub Pages + Jekyll，就可以快速將文章上線變成個人部落格唷。

前置作業，請先確認你有以下這些東西：

- [Ruby 程式語言](https://www.ruby-lang.org/en/)
- [GitHub ID](https://github.com/)

## 步驟 1 - GitHub 新增一個倉庫 (repository)

GitHub Pages 是知名線上版本控制網站 GitHub 提供的免費靜態網站上線服務。

要使用這個服務第一個當然要有 GitHub 的帳號，然後新建一個倉庫 (repository)，GitHub Pages 有指定使用的倉庫名稱，就是 `username`+`.github.io` => `username.github.io`，這也就是之後網站發佈完成的網址。

## 步驟 2 - 安裝 GitHub Pages gem

GitHub Pages 是用來在本機電腦中安裝啟用 Jekyll 環境的套件，並且進行更新維護，讓使用者本機設定能和 GitHu Pages 遠端伺服器的環境設定同步。

GitHub Pages gem 安裝指令：

```bash
~$ gem install github-pages
```

GitHub Pages 套件裡面包含了 Jekyll 以及相關的套件，安裝完後，輸入 `github-pages vesrsions` 可以查看安裝的套件及版本訊息， 所以只要裝好 GitHub Pages 就不必再另外安裝 Jekyll。

- 更新 GitHub Pages gem

Jekyll 是一個活躍的開源專案，經常發佈更新，如果 GitHub Pages 伺服器進行更新，與使用者本機電腦用的版本不同的時候，可能會導致本機與 GitHub Pages 發佈結果不一致。所以本機預覽發佈前，記得先確認本機環境版本是否與 GitHub Pages 的相同。

[GitHub Pages Dependency Versions](https://pages.github.com/versions/)

```bash
~$ gem update github-pages
```

## 步驟 3 - 啟動一個新 Jekyll 專案

GitHub Pages 套件安裝完成後，就可以使用 jekyll 的指令了。

```bash
~$ jekyll new myblogname

#就可以新增一個 Jekyll 的專案，這裡因為是要發佈到 GitHub Pages，所以名稱使用 "username.github.io"

~$ jekyll new username.github.io
```

## 步驟 4 - Jekyll 設定

進入專案目錄中，就可以看到 Jekyll 初始的目錄架構。

```bash
~$ cd username.github.io
=> username.github.io$
```

這裡只介紹 2 個最基本的檔案設定：

 - config.yml：

網站的 Metadata 設定，Jekyll 的環境設定：

```
Site Settings：網站設定
title：網站名稱
email：網站/使用者的email
description：網站的描述
url：網站網址
twitter_username：twitter 帳號
github_username：github 帳號
其他進階設定(待續…)
```

- _posts：文檔存放資料夾

所有的要發佈的文檔都放置在這個資料夾中，不過 Jekyll 有指定文件的命名格式：

```
以 Markdown 文檔為例：
YEAR-MONTH-DAY-title.md
=> 2015-05-20-iloveu.md
```

然後在文檔中還必須加入一段 `Front Matter` 提供 Jekyll 讀取辨識。

```
基本款的 YAML front matter：

---
layout: post
title: I Love Ruby
---

#fornt matter 前後使用 "---"包起來(還可以再添加許多其他的屬性，待續…)。
#layout: post 指的是套用 post 這個模版產生畫面。
#title: I Love Ruby 指的就是文章的標題。
```

## 步驟 5 - 準備上線

將文檔都調整完畢之後就可以準備上線了

首先在專案目錄下，使用 Jekyll 指令進行網站的預覽：

```bash
usernam.github.io$ jekyll serve
#使用瀏覽器打開 localhost:4000，就可以進行預覽。
```

接下來就是把程式碼推上 GitHub 的操作，倉庫名稱就是步驟 1 中建立的那一個：username.github.io。

```bash
在 username.github.io 專案目錄底下進行
usernam.github.io$ git init
usernam.github.io$ git add -A
usernam.github.io$ git commit -m "my blog on GitHub Pages"
usernam.github.io$ git remote add origin https://github.com/username/username.github.io
usernam.github.io$ git push
```

跑完之後，使用瀏覽器連上 `http://username.github.io`，就可以看到基本款的個人部落格了囉。

之後有新增、修改、刪除文檔，一樣使用 git 的操作即可進行更新。

>2. 續集：[Jekyll 進階設定](http://jekyllrb.com/)-未開發的潛能好多好多
3. 前傳：[Liquid](https://github.com/Shopify/liquid/wiki)-負責產生頁面的模版語法
4. 前傳：[kramdown](http://kramdown.gettalong.org/index.html)-請問你跟Markdown的關係是…
4. 番外篇：[JekyllBootstrap](http://jekyllbootstrap.com/)-想要漂釀的主題佈景
