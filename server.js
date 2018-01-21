const express = require('express');
const http = require('http');
var fs = require('fs');
const hbs = require('hbs');

var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname))


const port = 3000;

app.get('/greeting', (req, res) =>
{
  //res.send('Hello Express. This is saajan');
  res.render('charts.hbs');
}
);

app.get('/', (req, res) =>
{
  res.send('<h1>Hello Express. This is first page</h1>');
}
);

app.get('/testing', (req, res) => {
  res.send(
    {
      name: 'Saajan',
      likes: ['Coding']
    }
  );
});


app.listen(port);

console.log("Listening in on port " + port);
