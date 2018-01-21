const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');
const hbs = require('hbs');
var firebase = require("firebase");
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const _ = require('lodash');


var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({ extended: true }));


var config = {
  apiKey: "AIzaSyCqzuKg8ftrSN84qf-46BHPKd1RsmfkF7Q",
  authDomain: "hackdavis2018-c31a2.firebaseapp.com",
  databaseURL: "https://hackdavis2018-c31a2.firebaseio.com",
  storageBucket: "hackdavis2018-c31a2.appspot.com",
};
firebase.initializeApp(config);




const port = 3000;

app.get('/greeting', (req, res) =>
{
  //res.send('Hello Express. This is saajan');
  res.render('charts.hbs');
}
);

app.get('/', (req, res) =>
{
  res.render('testingForm.hbs');
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

app.post('/newUser', (req, res) => {

  //var body = _.pick(req.body, ['firstname', 'password']);

  //var password = req.password;



  var email = req.body.email;
  var password = req.body.password;

  console.log("Create user\nEmail: " + req.body.email + "\nPassword: " + req.body.password); //+ password);

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });

    res.render('finishedAddingUser.hbs');
});

app.post('/signIn', (req, res) => {

  var email = req.body.email;
  var password = req.body.password;

  console.log("Sign In\nEmail: " + req.body.email + "\nPassword: " + req.body.password); //+ password);

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
res.render('finishedSigningIn.hbs');

});



app.listen(port);

console.log("Listening in on port " + port);
