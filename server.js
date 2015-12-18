// Test server using Node.js and Express.js
//
//
var http = require('http');
var express = require('express');
var faker = require('faker')
var app = express();

var userData;
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

app.get('/getTestData', function (req, res) {
    //res.type('text/html');
    //res.sendFile(__dirname + '/public/index.html');
    res.type('application/json');
    //res.send({'data': 'Here is some test data'});
    userData = userData || generateUserData(); // We want the same data for the life of the server session.
    res.send(userData);
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
    var fakeName,
        finance,
        address,
        date,
        phone,
        internet,
        image,
        tmp = {},
        obj = {'data': []};
    users = Object.prototype.toString.call(users) === '[object Array]' ? users : [];
    for (i = 0; i < 20; i++) {
        fakeName = faker.name;
        finance = faker.finance;
        address = faker.address;
        date = faker.date;
        phone = faker.phone;
        internet = faker.internet;
        image = faker.image;
        var state = address.state();
        tmp = {
            'firstName': fakeName.firstName(),
            'lastName': fakeName.lastName(),
            'job': fakeName.jobTitle(),
            'prefix': fakeName.prefix(),
            'employeeId': isSalaried() ? 'se_' + finance.account() : 'hn_' + finance.account(),
            'startDate': date.past(5),
            'endDate': isTerminated() ? date.between(date.recent(), date.past()) : null,
            'contact': {
                'cell': phone.phoneNumber().replace(/[\(\)-.\s]*/g, "").replace(/(x)([\d]{0,5})/, "").substring(0, 10).replace(/^0/, (Math.floor(Math.random() * 9) + 1).toString()),
                'home': phone.phoneNumber().replace(/[\(\)-.\s]*/g, "").replace(/(x)([\d]{0,5})/, "").substring(0, 10).replace(/^0/, (Math.floor(Math.random() * 9) + 1).toString()),
                'address' : address.streetAddress(),
                'stateAbbr' : address.stateAbbr(state),
                'zip' : address.zipCode()
            },
            'avatar': internet.avatar(),
            //'image' : image.image(),
            //'imageUrl': image.imageUrl()
        };
        users.push(tmp);
    }
    obj.data = users;
    return obj;
};

isSalaried = function() {
    return (Math.random()<.5);
}
isTerminated = function() {
    return (Math.random()<.5);
}
 generateUserData = function (users) {
     var fakeName,
         finance,
         address,
         date,
         phone,
         internet,
         image,
         tmp = {},
         obj = {'data': []};
     users = Object.prototype.toString.call(users) === '[object Array]' ? users : [];
     for (i = 0; i < 20; i++) {
         fakeName = faker.name;
         finance = faker.finance;
         address = faker.address;
         date = faker.date;
         phone = faker.phone;
         internet = faker.internet;
         image = faker.image;
         var state = address.state();
         tmp = {
             'firstName': fakeName.firstName(),
             'lastName': fakeName.lastName(),
             'job': fakeName.jobTitle(),
             'prefix': fakeName.prefix(),
             'employeeId': isSalaried() ? 'se_' + finance.account() : 'hn_' + finance.account(),
             'startDate': date.past(5),
             'endDate': isTerminated() ? date.between(date.recent(), date.past()) : null,
             'contact': {
                 'cell': phone.phoneNumber().replace(/[\(\)-.\s]*/g, "").replace(/(x)([\d]{0,5})/, "").substring(0, 10).replace(/^0/, (Math.floor(Math.random() * 9) + 1).toString()),
                 'home': phone.phoneNumber().replace(/[\(\)-.\s]*/g, "").replace(/(x)([\d]{0,5})/, "").substring(0, 10).replace(/^0/, (Math.floor(Math.random() * 9) + 1).toString()),
                 'address' : address.streetAddress(),
                 'stateAbbr' : address.stateAbbr(state),
                 'zip' : address.zipCode()
             },
             'avatar': internet.avatar(),
             //'image' : image.image(),
             //'imageUrl': image.imageUrl()
         };
         users.push(tmp);
     }
     obj.data = users;
     return obj;
 };

isSalaried = function() {
    return (Math.random()<.5);
}
isTerminated = function() {
    return (Math.random()<.5);
}

// Set server to listen for requests.
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});
