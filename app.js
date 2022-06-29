const express = require('express')
const app = express()
const fs = require('fs')



app.get('/', (req, res) => {

    res.send('Hello')

})

/*app.get('/api/users', (req, res) => {

    res.send('Users')

})
app.get('/api/companies', (req, res) => {

    res.send('Companies')

})*/

app.get('/api/users', (req, res) => {
    fs.readFile(__dirname + '/api/users' + ".json", 'utf8', function (err, data){
        var dataUsers = JSON.parse(data);
        res.send(dataUsers);
        //res.end(data);
    });
});

app.get('/api/companies', (req, res) => {
    fs.readFile(__dirname + '/api/companies' + ".json", 'utf8', function (err, data){
        var dataCompanies = JSON.parse(data);
        res.send(dataCompanies);
        //res.end(data);
    });
});   





const PORT = 3000
var server = app.listen(PORT, () => {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Server running on http://%s:%s", host, port)
})