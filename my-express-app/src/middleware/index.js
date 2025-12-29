const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const middleware = express.Router();

// Logging middleware
middleware.use(morgan('dev'));

// Body parser middleware
middleware.use(bodyParser.json());
middleware.use(bodyParser.urlencoded({ extended: true }));

// Error handling middleware
middleware.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = middleware;