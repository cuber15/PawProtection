const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = express.Router();

indexRouter.use(bodyParser.json());

indexRouter.route('/')
.all((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.render('login');
})

module.exports = indexRouter;
