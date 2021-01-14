require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: process.env.ORIGIN || 'http://localhost:8091',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect to database
const db = require('./app/models');

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Selam sana ey admin!');
    })
    .catch(err => {
        console.log('Bi bak bakiyim ben oteki odadamiyim?', err);
        process.exit();
    });

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

require('./app/routes/tutorial.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/basic.routes')(app);
require('./app/routes/position.routes')(app);
require('./app/routes/positionType.routes')(app);
require('./app/routes/location.routes')(app);
// require('./app/routes/detail.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
