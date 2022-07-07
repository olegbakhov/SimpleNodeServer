const express = require('express')
const app = express()
const fs = require('fs')



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    // console.log('>>>>>>>>>>>>>datausers>>>>>>>>>>>>>>', res.sendFile)
});

app.get('/api/users', (req, res) => {
    fs.readFile(__dirname + '/api/users' + ".json", 'utf8', function (err, data) {
        var dataUsers = JSON.parse(data);
        // console.log('>>>>>>>>>>>>>datausers>>>>>>>>>>>>>>', dataUsers);
        res.send(dataUsers);
        //res.end(data);
    });
});

app.get('/api/companies', (req, res) => {
    fs.readFile(__dirname + '/api/companies' + ".json", 'utf8', function (err, data) {
        var dataCompanies = JSON.parse(data);
        res.send(dataCompanies);
        //res.end(data);
    });
});

class MyClass {
callTheCallback(callback) {
    callback();
    }
}
module.exports = MyClass;


const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Server running on http://%s:%s", host, port)
})
