const express = require('express');

var app = express();

app.get('/greeting', (req, res) =>
{
  res.send('Hello Express. This is saajan');
}
);

app.get('/', (req, res) =>
{
  res.send('Hello Express. This is first page');
}
);


app.listen('3000');
