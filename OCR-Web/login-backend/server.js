// my node start point

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var config = require('./config');
var userRoute = require('./routes/user.route');
var cors = require('cors');
 

// connect to mongoDB 
mongoose.connect(config.dbUrl);
   // dbUrl: "mongodb://localhost:27017/nodeDB"
    MongoClient.connect('mongodb://localhost:27017/nodeDB', function(err, db) {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

var port = 5001;
var app = express();

// add middleware 
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoute);

// set public resoures folder
app.use(express.static(__dirname + '/public'));

// set your first route
app.get('/', (req, res) => {
    // res.send('Hello Nodemon!');
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});

