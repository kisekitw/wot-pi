const express = require('express');
const router = express.Router();
const resources = require('../resources/model');

router.route('/').get((req, res, next) => {
    res.status(200).send(resources.pi.actuators);
});

router.route('/leds').get((req, res, next) => {
    res.status(200).send(resources.pi.leds);
});

router.route('/leds/:id').get((req, res, next) => {
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function (req, res, next) {
    var selectedLed = resources.pi.actuators.leds[req.params.id];
    selectedLed.value = req.body.value;
    req.result = selectedLed;
    next();
});


module.exports = router;