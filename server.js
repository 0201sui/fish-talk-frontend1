const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

// 中间件
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ========== 健康检查 ==========
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    name: '鱼说 Fish-Talk API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    time: new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
  });
});

// ========== 获取当前时间（供 AI 时间感知） ==========
app.get('/api/time', (req, res) => {
  const now = new Date();
  res.json({
    iso: now.toISOString(),
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()],
    formatted: now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
  });
});

// ========== 启动服务器 ==========
app.listen(PORT, () => {
  console.log(`🐋 鱼说 API 服务已启动，端口: ${PORT}`);
  console.log(`📍 本地地址: http://localhost:${PORT}`);
  console.log(`🕐 启动时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}`);
});