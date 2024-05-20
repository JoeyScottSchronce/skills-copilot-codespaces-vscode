// Create web server
var express = require('express');
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var mysql = require('mysql');
var cors = require('cors');

// Add this line below the require statements
app.use(cors());

// Add this line below the require statements
app.use(express.json());

// Add this line below the require statements
app.use(express.urlencoded({ extended: true }));

//
var http = require('http');
var fs = require('fs');

// middleware
app.use(express.static('public'));

// route
app.get('/', (req, res) => {
    // code inside the route handler
}); // Add this closing curly brace

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

