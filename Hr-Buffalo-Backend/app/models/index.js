const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);
db.users = require('./user.model.js')(mongoose);
db.identities = require('./identity.model.js')(mongoose);
db.contactProfiles = require('./contactProfile.model.js')(mongoose);
db.staffs = require('./staff.model.js')(mongoose);
db.positions = require('./position.model.js')(mongoose);
db.positionTypes = require('./positionType.model.js')(mongoose);
db.budgetCodes = require('./budgetCode.model.js')(mongoose);
db.stateCodes = require('./stateCode.model.js')(mongoose);
db.locations = require('./location.model.js')(mongoose);

module.exports = db;
