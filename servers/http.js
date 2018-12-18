const express = require('express');
const actuatorsRoutes = require('../routes/actutators');
const sensorsRoutes = require('../routes/sensors');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorsRoutes);

app.get('/pi', (req, res) => {
    res.send('This is the WoT-Pi!')
});

module.exports = app;