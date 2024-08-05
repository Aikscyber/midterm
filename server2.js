var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('You have successfully created your second app!');
})

var server = app.listen(2001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App is running at http://%s:%s", host, port)
})
