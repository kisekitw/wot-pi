const express = require('express');
const router = express.Router();
const resources = require('../resources/model');

router.route('/').get((req, res, next) => {
    res.status(200).send(resources.pi.sensors);
});

router.route('/pir').get((req, res, next) => {
    res.status(200).send(resources.pi.sensors.pir);
});

router.route('/temperature').get((req, res, next) => {
    res.status(200).send(resources.pi.sensors.temperature);
});

router.route('/humidity').get((req, res, next) => {
    res.status(200).send(resources.pi.sensors.humidity);
});

module.exports = router;