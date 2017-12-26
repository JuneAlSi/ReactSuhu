var express = require('express');

// Create our app
var app = express();

// tell which folder want tobe served
app.use(express.static('public'));

// start server
app.listen(3000, function(){
  console.log('Express is up on port 3000');
});
