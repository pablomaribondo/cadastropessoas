const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const db = require('./app/config/db-config.js');

db.sequelize.sync({force: true}).then(() => {
    console.log('Sync');
});

const app = express();

var handlebars = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "app/view/layout"),
    partialsDir: path.join(__dirname, "app/view/partial"),
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "app/view"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

require('./app/route/pessoa-route.js')(app);

var server = app.listen(8124, () => {
    let host = server.address().address
    let port = server.address().port

    console.log(`App listening at http://${host}:${port}`)
})