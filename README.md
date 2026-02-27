# 🎤 Show Your 9Sing (是但9唱)

> **Just Sing, No Config.**
>
> A minimalist, zero-config static music player page designed to showcase your karaoke recordings. It automatically builds playlists from your `src` folder and supports SPA routing (direct links to songs).  
  
> **是但唱，唔使烦。**
>
> 一个超轻量级的静态 H5 音乐播放页面，专门用来展示你的 K 歌录音。自动扫描`src`目录生成歌单，支持路由直达（分享链接直接播放对应歌曲）。

---

## ✨ Features / 特性

* **🎧 Auto Playlist**: No JSON editing required. Just upload audio files, and the script (`scan.js`) generates the list.
    <br>**自动歌单**：无需手写 JSON。上传音频，构建时脚本自动生成列表。
* **🔗 Deep Linking**: Supports direct links like `your-domain.com/SongName`. Share a specific song easily.
    <br>**路由直达**：支持 `域名/歌名` 直接访问。分享链接给朋友，点开即听。
* **📜 Lyrics Sync**: Automatically loads `.txt` lyrics with the same filename.
    <br>**歌词同步**：自动展示与音频同名的 `.txt` 歌词文本。

---

## 🔴 Live Demo / 在线演示

Click the link below to listen:
<br>**点击下方链接直接试听：**

🔗 **[https://9sing.leidun.pp.ua](https://9sing.leidun.pp.ua)**

---

## 📂 Directory Structure / 目录结构

Simply place your audio (`.mp3`/`.m4a`) and lyrics (`.txt`) in the `src` folder:  
只需要把音频 (`.mp3`/`.m4a`) 和歌词 (`.txt`) 扔进 `src` 文件夹：

```text
.
├── src/
│   ├── Song Title.mp3      # Audio file
│   ├── Song Title.txt      # Lyrics file (Optional)
│   └── ...
├── scan.js                 # Auto-build script
├── index.html              # Main player logic
├── _redirects              # [Important] For SPA routing (Cloudflare)
└── list.json               # Generated automatically (无需手动修改)

```

> **⚠️ Important / 注意:**
> Do not delete `_redirects` . It is critical for routing.  
> 请勿删除 `_redirects` 文件，它对路由跳转至关重要。

---

## ⚙️ Configuration / 配置

To change your Avatar and Nickname, edit the section of `index.html`:  
要修改头像和昵称，请编辑 `index.html` 的配置：

```javascript
const AVATAR_URL = "./favicon.ico";
const NICKNAME = "My Name";
const HOME_PAGE_URL = "https://your-blog.com";

```

---

## 🚀 Deployment / 部署

### Cloudflare Pages (Recommended / 推荐)

1. Log in to **Cloudflare Dashboard** -> **Pages** -> **Connect to Git**.
2. Select this repository.
3. **Build Settings (构建设置)**:
* **Build command (构建命令)**: `node scan.js`
* **Build output directory (输出目录)**: `.` (Enter a single dot / 输入一个点)
4. Click **Save and Deploy**.
