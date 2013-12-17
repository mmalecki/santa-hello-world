var http = require('http');
var express = require('express');
var app = express();

http.createServer(app).listen(process.env.PORT || 8000);

app.get('/', function (req, res) {
  res.send('Hello world\n');
});
