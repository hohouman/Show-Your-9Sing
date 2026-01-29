# 🎤 Show Your 9 Sing (是9但唱)

> **Just Sing, No Config.**  
> A lightweight, static H5 music player page designed to showcase your karaoke recordings. It automatically scans your folder and generates a playlist during the build process.
  
> **是但唱，唔使烦。**  
> 一个超轻量级的静态 H5 音乐播放页面，专门用来展示你的 K 歌录音。它会在构建时自动扫描目录并生成歌单，主打一个“懒人维护”。

---

## ✨ Features / 特性

* **🎧 Auto Playlist**: No JSON editing required. Just upload audio files, and the script (`scan.js`) generates the list.




**自动歌单**：无需手写 JSON。上传音频，脚本自动生成列表。
* **📜 Lyrics Sync**: Automatically displays `.txt` lyrics with the same filename.




**歌词同步**：自动展示与音频同名的 `.txt` 歌词文本。
* **📱 Responsive**: Minimalist design, works perfectly on mobile and desktop.




**响应式设计**：极简风格，手机电脑完美适配。
* **⚡️ Cloud Ready**: Optimized for Cloudflare Pages, Vercel, and GitHub Pages.




**云端优选**：完美支持主流静态托管平台。

---

## 📂 Directory Structure / 目录结构

Simply place your files in the `src` folder:
只需要把文件扔进 `src` 文件夹：

```text
.
├── src/
│   ├── Song Title.mp3      # Audio file (MP3/M4A)
│   ├── Song Title.txt      # Lyrics file (Optional)
│   ├── Another Song.m4a
│   └── ...
├── scan.js                 # Auto-build script
├── index.html              # The player
└── list.json               # Generated automatically (无需手动修改)

```

---

## ⚙️ Configuration / 个性化配置

To change your Avatar and Nickname, edit the section of `index.html`:
要修改头像和昵称，请编辑 `index.html` 的配置：

```javascript
// index.html
const AVATAR_URL = "https://your-domain.com/avatar.ico";
const NICKNAME = "My Name";

```

---

## 🚀 Deployment / 部署教程

### Option 1: Cloudflare Pages (Recommended / 推荐)

*Best for automation. The list updates automatically when you push code.*  
*最推荐，自动化程度高，代码推送后自动更新歌单。*

1. Log in to **Cloudflare Dashboard** -> **Pages** -> **Connect to Git**.
2. Select this repository.
3. **Build Settings (构建设置)**:
* **Build command (构建命令)**: `node scan.js`
* **Build output directory (输出目录)**: `.` (Enter a single dot / 输入一个点)


4. Click **Save and Deploy**.

### Option 2: Vercel

*Very stable and fast. Similar to Cloudflare.*  
*非常稳定，速度快，设置与 Cloudflare 类似。*

1. Log in to **Vercel** -> **Add New...** -> **Project**.
2. Import this repository.
3. **Build & Development Settings**:
* **Build Command**: `node scan.js`
* **Output Directory**: `.` (Enter a single dot / 输入一个点)


4. Click **Deploy**.

### Option 3: GitHub Pages

*Since GitHub Pages is purely static, we use GitHub Actions to run the scan script.*  
*GitHub Pages 默认是纯静态的，我们需要使用 GitHub Actions 来运行扫描脚本。*  

1. Create a file at `.github/workflows/deploy.yml`.  
在仓库新建文件 `.github/workflows/deploy.yml`。  
2. Paste the content below into the file:  
将以下内容粘贴到文件中：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Generate Playlist
        run: node scan.js
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

  3. Go to Repo **Settings** -> **Pages** -> Select **Source**: `GitHub Actions`.  
  进入仓库 **Settings** -> **Pages** -> 将 **Source** 改为 `GitHub Actions`。
