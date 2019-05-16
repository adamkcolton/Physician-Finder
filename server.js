var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
require('dotenv').config()
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.REACT_APP_MAP_KEY,
    Promise: Promise
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
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

//------------ROUTES------------//

app.post('/search-physician/:first/:middle/:last', (req, res) => {
    var firstName = req.params.first;
    var middle = req.params.middle;
    var lastName = req.params.last;
    // console.log(`${firstName} ${middle} ${lastName}`)

    db.physicianData.find({ 'firstName': firstName, 'middle': middle, 'last': lastName }, function (error, found) {
        if (error) {
            console.log(error);
        }
        else {
            googleMapsClient.geocode({ address: found[0].address })
                .asPromise()
                .then((response) => {
                    found.push(response.json.results[0].geometry.location)
                    console.log(found);
                    res.json(found)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
});



app.listen(3001, function () {
    console.log("App running on port 3001!");
});