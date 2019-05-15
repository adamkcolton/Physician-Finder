var express = require("express");
var mongojs = require("mongojs");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

var databaseUrl = "physicianFinder_DB";
var collections = ["physicianData", "coords"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.listen(3001, function () {
    console.log("App running on port 3001!");
});