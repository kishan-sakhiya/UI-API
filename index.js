var express = require('express')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')
const { urlencoded } = require('body-parser')
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://kishan111:kishan111@cluster0.tvnwc.mongodb.net/movie?retryWrites=true&w=majority").then(() => {
    console.log("Database Connected");
})



var app = express();

app.use(bodyParser.urlencoded({extended:false}))
 
app.use(express.json())

app.use('/api',router);

// app.listen(3000,()=>{
app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
})