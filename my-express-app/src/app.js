const express = require('express');
const { setRoutes } = require('./routes/index');
const { setupMiddleware } = require('./middleware/index');

const app = express();
const PORT = process.env.PORT || 3000;

// ミドルウェアの設定
setupMiddleware(app);

// ルートの設定
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});