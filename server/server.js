const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const bodyparser = require('body-parser')

//intit app or high levele express
const app = express();

mongoose.connect(process.env.MONGODB_URL ,{useUnifiedTopology:true
     ,useNewUrlParser:true
     ,useCreateIndex:true
    },(err)=>{
    if (err) throw err;
    console.log("Database is successfully connected");
})
app.use(bodyparser.urlencoded({extended:true}));
require('./Models/post');

app.use(express.json());
app.use(require('./Routes/post'));

//server

app.listen(process.env.PORT,(err)=>{
    if(err) throw err;
    console.log("Server is running on port number 5000");
})