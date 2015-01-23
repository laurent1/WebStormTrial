/**
 * Created by laurentMac on 1/22/15.
 */
console.log("Start Pizza Shop");

var http = require("http");
var path = require('path');
var express = require("express");
var hb = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + '/public'));
app.engine("handlebars", hb());
app.set('view engine', 'handlebars');

app.get("/", function(req, res){
  res.render("home",{ title: "Italia"});
});

// http://localhost:3001/api/toppings
app.get("/api/toppings", function(req, res){
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(["pepperoni","mushrooms","ham"]);
});

var server = http.createServer(app);
server.listen(3001);
