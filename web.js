'use strict';

const $ = require('jquery');
const express = require('express')
const path = require('path')
const { parse } = require('querystring')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))
  .use('/jqueryui', express.static(__dirname + '/node_modules/jqueryui/'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))