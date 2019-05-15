var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

var databaseUrl = "physicianFinder_DB";
var collections = ["K", "coords"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});

//------------ROUTES------------//

app.post('/search-physician/:first/:middle/:last', (req, res) => {
    var firstName = req.params.first;
    var middle = req.params.middle;
    var lastName = req.params.last;
    console.log(`${firstName} ${middle} ${lastName}`)

    db.physicianData.find({ 'firstName': firstName, 'middle': middle, 'last': lastName }, function (error, found) {
        if (error) {
            console.log(error);
        }
        else {
            res.json(found)
        }
    });
});



app.listen(3001, function () {
    console.log("App running on port 3001!");
});