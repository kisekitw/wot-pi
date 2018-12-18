const httpServer = require('./servers/http');
const resources = require('./resources/model');
const pirPlugin = require('./plugins/internal/pirPlugin'),
    ledsPlugin = require('./plugins/internal/ledPlugin'),
    dhtPlugin = require('./plugins/internal/DHT22SensorPlugin');


pirPlugin.start({
    'simulate': true,
    'frequency': 2000
});

dhtPlugin.start({
    'simulate': true,
    'frequency': 10000
});

const server = httpServer.listen(resources.pi.port, () => {
    console.log('Your WoT Pi is up and running on port %s', resources.pi.port);
});