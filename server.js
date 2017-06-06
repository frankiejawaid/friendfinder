var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var htmlRoutes = require('./app/routing/html-routes.js');
var ApiRoutes 
var friends = require('./app/data/friends.js');

//Express app
var app = express();
var PORT = (process.env.PORT || 3000);

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var htmlServing = new htmlRoutes();
var api = new ApiRoutes();


// HTML execution
htmlServing.default(app, path);
htmlServing.survey(app, path);

// JSON execution
api.getApi(app, friends);''
api.postAPI(app, friends);

//Starts the server to listening
app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
})
