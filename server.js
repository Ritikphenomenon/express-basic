const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/about",function(req,res){
    res.send("hii my name is ,i love to____");
});

app.get("/section",function(req,res){
    res.send("hii ,we provide delicious items for fun");
});

app.listen(3000, function() {
    console.log("Example app listening on ");
  });
