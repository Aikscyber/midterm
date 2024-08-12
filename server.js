var express = require('express');
var path = require('path');
var app = express();


app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/process_post', function (req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        student_id: req.body.student_id,
        address: req.body.address,
        student_email: req.body.student_email,
        phone_no: req.body.phone_no,
        gender: req.body.gender,
        interests: req.body.interests 
    };
    console.log(response);
    res.send(JSON.stringify(response));
});


app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});
