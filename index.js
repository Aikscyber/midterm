var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('You have successfully created second app!');
})
var server = app.listen(2004, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app is running", host, port)
})