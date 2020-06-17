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
 var Name = req.body.name;
 var Email =  req.body.email;
 var data = {
     members: [
         {
             email_address: Email,
             status : "subscribed",
         }
     ]
 }
 var jsonData = JSON.stringify(data);
 const url = "https://us10.api.mailchimp.com/3.0/lists/9bac0ecd4b";
 const options = {
     method: "POST",
     auth:"sanki2:235065a304a99a6008e40733fe575d1b-us10"
 }
 const request = https.request(url,options,function(response){
     if(response.statusCode === 200){
         res.send("success");
     }else{
         res.send("failure-");
     }
   response.on("data",function(data){
       console.log(JSON.parse(data));
   })
 })
 request.write(jsonData);
 request.end();
})
app.post("/failure",function(req,res){
    res.redirect("/");
})
app.listen(3000,function(params){
    console.log("server running on port 3000");
  })
  //API key
  //235065a304a99a6008e40733fe575d1b-us10
  //Id
  //9bac0ecd4b
  