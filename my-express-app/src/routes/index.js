const express = require('express');
const IndexController = require('../controllers/index');

const setRoutes = (app) => {
    const router = express.Router();

    router.get('/', IndexController.home);
    router.get('/about', IndexController.about);

    app.use('/', router);
};

module.exports = setRoutes;