const fs = require('fs');
const path = require('path');

// --- 配置区域 ---
const targetDir = './src';   // 扫描目录
const outputFile = './list.json'; // 输出文件
// ----------------

try {
    // 1. 检查目录是否存在
    if (!fs.existsSync(targetDir)) {
        console.log(`⚠️ 目录 ${targetDir} 不存在，生成空列表。`);
        fs.writeFileSync(outputFile, '[]');
        process.exit(0);
    }

    const files = fs.readdirSync(targetDir);

    // 2. 过滤：只找音频文件(.mp3 或 .m4a)，并去掉后缀作为歌名
    const songList = files
        .filter(file => /\.(mp3|m4a)$/i.test(file))
        .map(file => {
            const parsed = path.parse(file);
            return {
                title: parsed.name,   // 歌名：十年
                file: file            // 文件名：十年.mp3 (保留后缀，防止HTML猜错)
            };
        });

    // 3. 写入 list.json
    fs.writeFileSync(outputFile, JSON.stringify(songList));
    console.log(`✅ 成功扫描 src 目录，共找到 ${songList.length} 首歌。`);

} catch (e) {
    console.error("❌ 脚本运行出错:", e);
    process.exit(1);
}