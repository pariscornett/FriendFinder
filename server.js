//require dependencies
var express = require("express");
var path = require("path");
var app = express();

//set up a port that will run on 8080 on local computer or whatever port is available on Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());