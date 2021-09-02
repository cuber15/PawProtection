const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = express.Router();

loginRouter.use(bodyParser.json());

loginRouter.route('/')
.all((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.render('login');
})

module.exports = loginRouter;
