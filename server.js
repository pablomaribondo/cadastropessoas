import express from 'express';
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

import db from './app/config/db-config';

db.sequelize.sync({force: true}).then(() => {
    console.log('sync');
});

require('./app/route/pessoa-route')(app);

var server = app.listen(8124, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`App listening at http://${host}:${port}`)
})