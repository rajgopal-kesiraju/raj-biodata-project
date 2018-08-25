const express = require ('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {

  res.send('Hello This is my Resume');
});

app.get('/help', (req,res) => {

  res.send('Hello This is my biodata');
});



app.listen (3000);
