'use strict'

var express= require('express');
var bodyParser= require('body-parser');

var app = express();
//rutas

//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//rutas

//exportar
module.exports= app;