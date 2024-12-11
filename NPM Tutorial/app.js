const express = require("express");
const app = express();
const catMe = require("cat-me");
const lodash = require("lodash");

console.log(lodash.add(5, 6));


app.listen(3000, function(){
    console.log("The server has started up.");
})