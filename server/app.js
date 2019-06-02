const express = require('express');
const app = express();
const http = require('http');
var port = 3000;
const fs = require('fs');

app.use(express.static('public'))
    // app.get('/', function(req, res) {

//     // let mySite = fs.readFileSync('E:\\SisAn\\system-analysis-project\\public');
//     // console.log(mySite);
//     // res.end(mySite);
// });

app.listen(port, function() {
    console.log('Example app listening on port 3000!');
});