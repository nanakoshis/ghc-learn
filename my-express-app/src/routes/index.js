const express = require('express');
const IndexController = require('../controllers/index');

const setRoutes = (app) => {
    const router = express.Router();

    router.get('/', IndexController.home);
    router.get('/about', IndexController.about);

    // ルートの設定
    app.use('/', router);
    app.use('/about', router);
};

module.exports = setRoutes;