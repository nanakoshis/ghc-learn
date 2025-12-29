const express = require('express');
const setRoutes = require('./routes/index');
const middleware = require('./middleware/index');

// src/app.js

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェアの設定
app.use(express.json());

// ルートの設定
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});