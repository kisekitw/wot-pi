const express = require('express');
const router = express.Router();
const resources = require('../resources/model');

router.route('/').get((req, res, next) => {
    // res.status(200).send(resources.pi.sensors);
    req.result = resources.pi.sensors;
    next();
});

router.route('/pir').get((req, res, next) => {
    // res.status(200).send(resources.pi.sensors.pir);
    req.result = resources.pi.sensors.pir;
    next();
});

router.route('/temperature').get((req, res, next) => {
    // res.status(200).send(resources.pi.sensors.temperature);
    req.result = resources.pi.sensors.temperature;
    next();
});

router.route('/humidity').get((req, res, next) => {
    // res.status(200).send(resources.pi.sensors.humidity);
    req.result = resources.pi.sensors.humidity;
    next();
});

module.exports = router;