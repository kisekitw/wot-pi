const resources = require('./../../resources/model');

var interval, sensor;
var model = resources.pi.sensors.pir;
var pluginName = resources.pi.sensors.pir.name;
var localParams = {
    'simulate': false,
    'frequency': 2000
};

exports.start = (params) => {
    localParams = params;
    if (localParams.simulate) {
        simulate();
    } else {
        connectHardware();
    }
};

exports.stop = () => {
    if (localParams.simulate) {
        clearInterval(interval);
    } else {
        sensor.unexport();
    }
    console.log('%s plugin stopped!', pluginName);
};

function connectHardware() {
    const Gpio = require('onoff').Gpio;
    sensor = new Gpio(model.gpio, 'in', 'both');
    sensor.watch((err, value) => {
        if (err) {
            exit(err);
        }

        model.value = !!value;
        showValue();
    });

    console.log('Hardware %s sensor started', pluginName);
}

function simulate() {
    interval = setInterval(() => {
        model.value = !model.value;
        showValue();
    }, localParams.frequency);
    console.log('Simulated %s sensor started', pluginName);
};

function showValue() {
    console.log(model.value ? 'there is someone!' : 'not anymore!');
}