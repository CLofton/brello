// dependencies from node
const http = require('http');
const path = require('path');

// dependencies from npm
const express = require('express');
const ejs = require('ejs');

// Initialize our app
const app = express();

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add a route to our app that renders our index view
//app.get('/', function(req, res, next) {
  //res.render('index.ejs', { greeting: 'Hello, from ejs!'});
//});

// Add a route to our app that renders our index view
app.get('/', function(req, res, next) {
  res.render('index.ejs', { names: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'], greeting: 'Hello, from ejs!' });
});


const port = 3001;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
