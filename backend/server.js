const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./models/user.model');



app.listen(5000,()=>{
    console.log("connected to server");
});