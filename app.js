'use strict';

var express = require('express');
var $ = require('jquery');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname});
});

// for importing jQuery modules installed using npm
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/jqueryui', express.static(__dirname + '/node_modules/jqueryui/'));

app.use(express.static('public'));

server.listen(3000, 'localhost');

server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});