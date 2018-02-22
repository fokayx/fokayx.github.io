---
layout: post
title: GitHub page 讓網站免費上線
tag: [GitHub_page, SourceTree]
feature-img: "assets/img/2018/02-22/github_5xMei.jpg"
thumbnail: "assets/img/thumbnails/2018/02_22_github_5xMei.jpg"
---

GitHub 有提供一個 [GitHub page] 的免費服務，很適合拿來當靜態網站伺服器，例如：個人專頁或是專案官網，免費、設定簡便、安全性還不錯，缺點是只能放一些靜態內容的頁面，使用 php、java 需要資料處理什麼的這邊沒有支援。

如果你想了解一下 Git 是何物的話，可以先看看 [你今天 Git 了嗎？] 或者你有聽說過 Git，想知道怎麼安裝和初始化設定的話，可以參考 [Git 初始化，完全新手設定包]。

## 註冊 GitHub 帳號

![github_sign_up](/assets/img/2018/02-22/github_sign_up.png)

在 [GitHub] 註冊個帳號，Username 會員帳號，取名字很重要一直以來對我而言都是個難題，可以使用的帳號名稱會出現綠色勾勾。Email 要使用沒在 GitHub 註冊過的 Email。密碼的規則是要 7 個字數以上，其中包含 1 個英文字母、1 個數字。不通過的欄位會出現紅紅的警告提示，全部設定完成之後 Sign up for GitHub 按下去。

### GitHub 會員方案

![github_choose_plan](/assets/img/2018/02-22/github_choose_plan.png)

GitHub 提供免費和付費兩種使用方案，免費方案是你放上 GitHub 的東西都是公開的任何人都可以路過看看，如果是有些不可告人不方便曝光需要私密空間的話，可以選擇付費方案一個月七美金，能將上傳的專案設為 private 不公開。這邊就先選擇免費方案繼續下去。

### Email 認證

![github_verify_email](/assets/img/2018/02-22/github_verify_email.png)

下一步是到剛剛註冊時填的信箱，收收 GitHub 的驗証信，Verify email address 連結點下去之後會回到 GitHub，GitHub 有一個 [Hello world guide] 簡易介紹 Git 和 GitHub 的使用方法可以看看，當然也可以直接跳過。Let's Start a project。

## 新增 GitHub 專案

![github_start_project](/assets/img/2018/02-22/github_start_project.png)

在 GitHub 開始一個專案首先是給 repository 命名，Git 裡面的 repository 是類似建立一個倉庫，這個倉庫用來存放你要紀錄的檔案，而在 GitHub 建立 repository 等於建了一個雲端倉庫，可以將專案的 Git 版本紀錄放在 GitHub，方便透過網路進行存取、同步專案的進度或是進行多人共同開發
，也可以透過 GitHub 對專案進行 Git 的操作。

### 建立 username.github.io repository

![github_build_repo](/assets/img/2018/02-22/github_build_repo.png)

因為這篇文章是要用 GitHub page 製作個人網站，所以 repository 的名稱就設定為 `username.github.io`，username 請改為你自己註冊使用的 username，例如範例帳號是 kknow 就是設為 kknow.github.io。Description 是設定關於這個專案的簡介可以跳過不寫，然後選擇 Public 直接 Create repository，這邊的 Private 必須是付費會員才能使用，不是的話 GitHub 就會要你立刻把卡拿出來刷。

## 和 Git 第一次的親密接觸

![github_setup](/assets/img/2018/02-22/github_setup.png)

設定完 repository 會來到你建立的 username.github.io  頁面，目前 repository 因為什麼都沒有所以出現一堆指令建議你怎麼把東西放進來，這裡只要把第一行 repository 的網址複製起來就好。

如果你手上已經有準備要上線的網站，可以使用終端機 (terminal) 的指令或是圖形化介面軟體 (GUI)，將你的網站專案推送到 GitHub 的 repository。

### Mac OSX & Linux 終端機 / Windows 命令提示字元

```bash
注意一下：下面指令的 $ 是系統提示字元不用輸入的，# 後面的是說明

$ cd ~/my_website
# 切換到網站的目錄資料夾

my_website $ git init
# 設置 Git

my_website $ git add -A
# 將所有檔案加到 git 的暫存區

my_website $ git commit -m "build my web site on github"
# 把檔案送入 repository 建立一個版本紀錄

my_website $ git remote add origin https://github.com/kknow/kknow.github.io.git
# 新增 GitHub repository，其中的網址請換成剛剛在 GitHub 複製的。
# origin 是一般給 GitHub repository 命名的範例，你要取別的名字也是沒問題。

my_website $ git push -u origin master
# 將電腦本機版本紀錄推送至 GitHub
```

### 圖形化介面軟體（GUI, Graphic User Interface）- SourceTree

#### 設定 local repository

![sourcetree_local_repository](/assets/img/2018/02-22/sourcetree_local_repository.png)

在專案裡面建立 Git 的 repository，直接將專案的目錄夾拖拉到 SourceTree 的 repository 視窗即可。

![sourcetree_new_repository](/assets/img/2018/02-22/sourcetree_new_repository.png)

或者點擊 repository 視窗上方的 `+ New Repository`，然後選擇 `Create Local Repository`，再將 Destination Path 設為要上線的專案路徑即可。

#### 第一個 Git commit

![sourcetree_init_commit](/assets/img/2018/02-22/sourcetree_init_commit.png)

進到 SourceTree 的專案視窗，就可以進行第一次的 Git commit，將這個版本要紀錄的 Unstaged files 全選放到 Staged files，然後在下方輸入 commit 的訊息，輸入完之後按下右下角的 `Commit` 完成 git commit，這個步驟等於是寫下版本紀錄和將檔案的狀態存入 repository。

#### 設定 GitHub remote repository

![sourcetree_set_remote](/assets/img/2018/02-22/sourcetree_set_remote.png)

找到右上角的 `Settings` 點進 `Remotes` 後選擇 `Add`，可以設定遠端 repository。

![sourcetree_set_github_repository](/assets/img/2018/02-22/sourcetree_set_github_repository.png)

給 Remote name 取個名字、URL 要填在 GitHub username.github.io 複製的那行 URL，點下 `OK` 完成 GitHub remote repository 連結。

#### 推上 GitHub

![sourcetree_push_remote_github](/assets/img/2018/02-22/sourcetree_push_remote_github.png)

設定完 GitHub repository 再來把本機電腦的 local repository 推送上去囉，點擊上方的 `Push`，因為目前只有一個 branch: master，所以直接按下 `OK`，SourceTree 就會幫你進行一個 git push remote repository 的動作。

## 媽，我的網站在這

![github_kknow](/assets/img/2018/02-22/github_kknow.png)

最後回到 GitHub 重新載入頁面 username.github.io repository 會看到已經有剛剛推上來的檔案們了。這時候在瀏覽器輸入 `username.github.io` 就可以連上自己製作的網站囉！

![github_my_page](/assets/img/2018/02-22/github_my_page.png)

如果覺得看得有點不明所以，這邊 [為你自己學 Git - 使用 GitHub 免費製作個人網站] 也可以參考參考。

[GitHub page]: https://pages.github.com/
[GitHub]: https://github.com/
[你今天 Git 了嗎？]: /2018/02/03/Git-GitHub-introduce.html
[Git 初始化，完全新手設定包]: /2018/02/21/init-Git-config.html
[Hello world guide]: https://guides.github.com/activities/hello-world/
[為你自己學 Git - 使用 GitHub 免費製作個人網站]: https://gitbook.tw/chapters/github/using-github-pages.html
