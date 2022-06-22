var express = require('express')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')

var app = express();
app.use('/api',router);

// app.listen(3000,()=>{
app.listen(process.env.PORT,()=>{
    console.log("server started");
})