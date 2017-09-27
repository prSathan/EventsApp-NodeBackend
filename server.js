var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Event = require('./api/models/eventModel'),
bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds159963.mlab.com:59963/events');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./api/routes/eventRoutes');
routes(app);

app.listen(port);
console.log('Events App started on:' + port);
