const express = require("express");
const app = express();

// Route - home
app.get("/", function (req, res) {
  res.send("Welcome to my website!");
});

// Route - localhost:3000/hello
app.get("/hello", function (req, res) {
  // req = request
  res.send("Hello!!!  to the hello route!");
});

app.get("/game", function(req,res){
    res.send("Game 1");
});

app.listen(3000, function () {
  console.log("Website started made by me.");
});
