var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/hello', function(req, res) {
  res.send('hello World');
});

app.get('/hello2', function(req, res) {
  res.send('hello again!');
});

app.listen(8080, function() {
  console.log("app listening on port 8080");
});
