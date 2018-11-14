const express = require('express');
const tracker = require('./controller');

const app = express();

const port = 80;
const server = "localhost";

app.use(function(req, res, next) {
    res.header("Access-Controll-Allow-Origin", "*");
    res.header("Access-Controll-Allow-Headers","*");
    next();
});

app.use(express.json());//keep
app.use(express.urlencoded({extended: true}));//keep
app.use("/", express.static(__dirname + "/../client/"));//keep this

app.use('/', tracker);

app.listen(port);

console.log(`listening on: http://${server}:${port}`);