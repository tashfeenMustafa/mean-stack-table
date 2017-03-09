var http = require("http");
   var fs = require("fs");
   var express = require('express');
   var app = express();
   var mongo = require("./mongo"); 
   app.configure(function () {
     app.use(express.bodyParser());
     app.use(app.router); app.all('/', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Content-Type");
       next();
     });
     
    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    })
});