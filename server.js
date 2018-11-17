var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./app/config/db-config.js');

db.sequelize.sync({force: true}).then(() => {
    console.log('Sync');
});

require('./app/route/pessoa-route.js')(app);

var server = app.listen(8124, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`App listening at http://${host}:${port}`)
})