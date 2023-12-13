const mongoose = require("mongoose");
const db = require("./index");




const user= new mongoose.Schema({
    name:{type:String},
    email:{
        type:String,
        unique:true
    },
    password:{type:String},
    gender:{type:String},
    post:[{
        type:mongoose.Types.ObjectId,
        ref:"Post"
    }]

})
const post= new mongoose.Schema({
    date:{type:String},
    phonenumber:{type:Number},
    car:{type:String},
    numberOfPlaces:{type:Number},
    price:{type:Number},
    information:{type:String},
    image:{type:String},
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

})

const User = mongoose.model("User", user);
const Post= mongoose.model("Post",post)

module.exports = {User,Post};
