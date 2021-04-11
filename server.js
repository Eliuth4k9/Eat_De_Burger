// const express = require('express');
// const exphbs = require('express-handlebars');
// const routes = require('./controls/burgers_controller')


// const PORT = process.env.PORT || 4000;

// const app = express();

// app.use(express.static('public'));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');
// app.use(routes);


// app.listen(PORT, function() {
//     console.log(`App now listening at localhost: ${PORT}`)
// });

var express = require("express");

var PORT = process.env.PORT || 8000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controls/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
