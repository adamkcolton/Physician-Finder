var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var path = require('path');
var connectDB = require('./config/db');

connectDB();

require('dotenv').config()
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.REACT_APP_MAP_KEY,
    Promise: Promise
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))


// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
// });

var databaseUrl = process.env.MONGODB_URI || "physicianFinder_DB";
var collections = ["physicianData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});


//------------ROUTES------------//
app.get('/all-data', (req, res) => {
    db.physicianData.find({}, (error, found) => {
        if (error) {
            console.log(error)
        }
        else {
            res.send(found)
            console.log(found)
        }
    })
})

app.post('/search-physician/:first/:middle/:last', (req, res) => {
    var firstName = `"${req.params.first}"`;
    var middle = `"${req.params.middle}"`;
    var lastName = `"${req.params.last}"`;
    console.log(`${firstName} ${middle} ${lastName}`)
    var dbQuery = { 'Physician_First_Name': firstName, 'Physician_Last_Name': lastName }
    if (middle.match(/[a-z]/i)) dbQuery['Physician_Middle_Name'] = middle
    console.log(dbQuery)

    db.physicianData.find(dbQuery, function (error, found) {
        if (error) {
            console.log(error);
        } else if (!found[0]) {
            res.send(false)
        } else {
            var {
                Recipient_Primary_Business_Street_Address_Line1: street1,
                Recipient_Primary_Business_Street_Address_Line2: street2,
                Recipient_City: city,
                Recipient_State: state,
                Recipient_Zip_Code: zip,
                Recipient_Country: country } = found[0];

            var fullAddress = `${street1.slice(1, -1)} ${street2.slice(1, -1)}, ${city.slice(1, -1)} ${state.slice(1, -1)} ${zip.slice(1, -1)}, ${country.slice(1, -1)}`;
            console.log(fullAddress)

            googleMapsClient.geocode({ address: fullAddress })
                .asPromise()
                .then((response) => {
                    found.push(response.json.results[0].geometry.location, fullAddress)
                    console.log(found);
                    res.json(found)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 4000, function () {
    console.log("App running on port 4000!");
});