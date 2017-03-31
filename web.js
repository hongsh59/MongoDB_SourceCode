var express = require('express');
var app = express.createServer(express.logger());

var logger = require('fluent-logger');
logger.configure('fluentd.test', {host: 'localhost', port: 24224});

app.get('/', function(request, response) {
  logger.emit('follow', {from: 'userA', to: 'userB'});
  response.send('Hello World!');
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});