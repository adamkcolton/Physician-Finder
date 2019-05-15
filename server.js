var express = require("express");
var mongojs = require("mongojs");
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

// var databaseUrl = "physicianFinder_DB";
// var collections = ["physicianData", "coords"];

// var db = mongojs(databaseUrl, collections);
// db.on("error", function (error) {
//     console.log("Database Error:", error);
// });

//------------ROUTES------------//

app.post('/search-physician', (req, res) => {
    console.log(req.body.firstName + "sucks")
    res.send(req.body.firstName + "sucks")
})



app.listen(3001, function () {
    console.log("App running on port 3001!");
});