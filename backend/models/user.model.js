const mongoose = require("mongoose");
const db = require('./config');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel = db.model('user',userSchema); //user is table name in mongoDB


module.exports = userModel;