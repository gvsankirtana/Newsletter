const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
  })
app.post("/",function(req,res){

})
app.listen(3000,function(params){
    console.log("server running on port 3000");
  })
  