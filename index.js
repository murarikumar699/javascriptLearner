const express = require("express");
const app = express();
const db = require("./config/db");
const UserClick = require("./models/userClick");
const path = require('path');
// const route = require("./routes/route");
const api = require("./routes/api");
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/api/",api);
app.get('/*', async function (req, res) {
    console.log("resres",req.ip);
    await UserClick.findOneAndUpdate({ipAddress:req.ip},{ipAddress:req.ip},{
        new: true,
        upsert: true,
    });
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use(route);
const PORT=8000;

app.listen(PORT, () => {
    console.log(`app is working on port ${PORT}`);
})

