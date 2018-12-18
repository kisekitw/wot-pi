var express = require('express'),
    actuatorsRoutes = require('./../routes/actutators'),
    sensorsRoutes = require('./../routes/sensors'),
    converter = require('./../middleware/converter'),
    cors = require('cors'),
    bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorsRoutes);

app.get('/pi', (req, res) => {
    res.send('This is the WoT-Pi!')
});

app.use(converter());
module.exports = app;