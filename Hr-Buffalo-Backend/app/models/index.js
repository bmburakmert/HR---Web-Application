const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);
db.users = require('./user.model.js')(mongoose);
db.basics = require('./basic.model.js')(mongoose);

module.exports = db;
