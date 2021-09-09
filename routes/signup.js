const express = require('express');
const bodyParser = require('body-parser');

const SignupRouter = express.Router();

SignupRouter.use(bodyParser.json());

SignupRouter.route('/')
.all((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.render('signup');
})

module.exports = SignupRouter;