const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){//get the data from server
    res.sendFile(__dirname + "/signup.html");
  })
app.post("/",function(req,res){//to send the data to server
 var Name = req.body.name;//taking in the name 
 var Email =  req.body.email;//taking in the email
 var data = {
     members: [
         {
             email_address: Email,
             status : "subscribed",
         }
     ]
 }
 var jsonData = JSON.stringify(data);//converts data into a string format
 const url = "https://us10.api.mailchimp.com/3.0/lists/9bac0ecd4b";//api mailchimp
 const options = {
     method: "POST",
     auth:"sanki2:235065a304a99a6008e40733fe575d1b-us10"
 }
 const request = https.request(url,options,function(response){//sends request to the server
     if(response.statusCode === 200){
         res.sendFile("success");//if success then goes to success html page
     }else{
         res.sendFile("failure");// if failure then send the failure html page
     }
   response.on("data",function(data){//gets the data
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
  
