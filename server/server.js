'use-strict'
const express = require('express');
const path = require('path');
const body_parser = require('body-parser');

// Run Server
const app = express();
const port = process.env.PORT || 3000;
// Require routes from routes folder

//set static folder
app.use(express.static(path.join(__dirname, '../client')));

// middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

//Get all routes and set index.html as root

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});
// schedule.start();
// Start server
var server = app.listen(port, function() {
    console.log("Listening on " + port + "...");
});
