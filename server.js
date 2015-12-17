// Test server using Node.js and Express.js
//
//
var http = require('http');
var express = require('express');
var faker = require('faker')
var app = express();

var userData = [];
var generateUserData;
var server = http.createServer(app);

app.set('port', process.env.PORT || 8080);

// static directories.
app.use(express.static('public'));

app.get('', function (req, res) {
    res.type('text/html');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/', function (req, res) {
    res.type('text/html');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/giveMeTestData', function (req, res) {
    //res.type('text/html');
    //res.sendFile(__dirname + '/public/index.html');
    res.type('application/json');
    //res.send({'data': 'Here is some test data'});
    res.send(generateUserData());
});



app.get('default.html', function (req, res) {
    res.type('text/html');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('index.html', function (req, res) {
    res.type('text/html');
    res.sendFile(__dirname + '/public/index.html');
});

// custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function (err, req, res, next) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Faker data generator:
// generate some fake users.
 generateUserData = function (users) {
     var fakeName;
     var tmp = {};
     var i = 0;
     var obj = {'data': []};
     users = Object.prototype.toString.call(users) === '[object Array]' ? users : [];
     for (i = 0; i < 10; i++) {
         fakeName = faker.name;
         tmp = {
             'firstName': fakeName.firstName(),
             'lastName': fakeName.lastName(),
             'job': fakeName.jobTitle(),
             'prefix': fakeName.prefix()
         };
         users.push(tmp);
     }
     obj.data = users;
     return obj;
 };

// Set server to listen for requests.
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});
