//server using express...
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 8080;
const hostname = '127.0.0.1';

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');


app.all('/', (req, res, next) => {
    res.statusCode = 200;
    res.send("hello");
})

app.use('/', indexRouter);
app.use('/login', loginRouter);


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})
