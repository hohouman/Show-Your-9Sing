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

* **⚡️ Cloud Ready**: Optimized for Cloudflare Pages.  
  **云端支持**：完美支持Cloudflare Pages。

---

## 🔴 Live Demo / 在线演示

 Click the link below to listen:  
 **点击下方链接直接试听：**  
  
 🔗 **[https://9sing.leidun.pp.ua](https://9sing.leidun.pp.ua)**

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
const AVATAR_URL = "./favicon.ico";
const NICKNAME = "小雷顿"; 
const HOME_PAGE_URL = "https://leidun.pp.ua"; 
```

---

## 🚀 Deployment / 部署

### Cloudflare Pages (Recommended / 推荐)

*Best for automation. The list updates automatically when you push code.*  
*最推荐，自动化程度高，代码推送后自动更新歌单。*

1. Log in to **Cloudflare Dashboard** -> **Pages** -> **Connect to Git**.  
2. Select this repository.  
3. **Build Settings (构建设置)**:  
* **Build command (构建命令)**: `node scan.js`  
* **Build output directory (输出目录)**: `.` (Enter a single dot / 输入一个点)  
4. Click **Save and Deploy**.
