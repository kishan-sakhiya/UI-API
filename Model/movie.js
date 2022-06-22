var mongoose = require('mongoose')

var movieschema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("movie", movieschema);
