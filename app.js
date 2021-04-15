var express = require('express')
var app = express();

app.get("/test",function(req,res){
        res.type("text/plain");
        res.send("hi folks");
});

app.listen("3030");