const httpServer = require('./servers/http');
const resources = require('./resources/model');

const server = httpServer.listen(resources.pi.port, () => {
    console.log('Your WoT Pi is up and running on port %s', resources.pi.port);
});