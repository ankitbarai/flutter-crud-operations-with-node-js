const express = require("express");
const mongoose = require("mongoose");

//mongodb+srv://ankitbarai2023_db_user:Ankit@2003@cluster0.6hpi77f.mongodb.net/?appName=Cluster0

const DB_URL = "mongodb+srv://ankitbarai:Ankit123@cluster0.6hpi77f.mongodb.net/?appName=Cluster0";

mongoose.connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
