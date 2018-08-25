const express = require ('express');
// const hbs = require('hbs');
// const fs = require ('fs');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
res.render('resume.html')
//  res.send('Hello This is my Resume');
});

app.get('/help', (req,res) => {

  res.send('Hello This is my biodata');
});



app.listen(port);
