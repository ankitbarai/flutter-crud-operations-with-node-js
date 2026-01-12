const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./models/user.model');



app.listen(5000,()=>{
    console.log("connected to server");
});

//javascript tutorial

//datatypes

// var ,let and const

// function userDetails(email, name, username) {
//     console.log(`details are ${email},${name},${username}`);
// }


// userDetails("ankitbarai641@gmail.com","Ankit Barai","Anni")

//arrow functions

// let result = (name,marks)=>{
//     console,console.log(`name is ${name} and marks obtained is ${marks}`);
    
// }

// result("Ankit",90)
