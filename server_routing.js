var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("There is GET request for the homepage!");
    res.end('Here is the GET Method!');
});

app.post('/', function(req, res) {
    console.log("A POST request for the homepage is accessed.");
    res.end('Here is the POST Method');
})

app.get('/list_user', function (req, res) {
    console.log("GOT a GET request for /list_user");
    res.end('This is page Listening');
})
app.get('/Ocampo', function (req, res) {
    console.log("Aiko S. Ocampo");
    res.end('Aiko S. Ocampo WB-302');
})

app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.end('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://localhost:4000', host, port)
})
