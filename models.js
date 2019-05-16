const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/Petdb',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to database")
    }
}) 

const PetSchema = new mongoose.Schema({
    name: {type:String, required:true, unique:true, minlength:[3,"Your name sucks"]},
    type: {type:String, required:true, minlength:2},
    description: {type:String, required:true, minlength:5},
    skillOne: {type:String},
    skillTwo: {type:String},
    skillThree: {type:String},
    likes: {type:Number}
},
    {timestamps:true})
    mongoose.model('Pet', PetSchema);
    var pet = mongoose.model('Pet')
    module.exports = pet;