const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controls/burgers_controller')


const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.listen(PORT, function() {
    console.log(`App now listening at localhost: ${PORT}`)
});