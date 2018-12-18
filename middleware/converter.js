const msgpack = require('msgpack5')(),
    encode = msgpack.encode,
    json2html = require('node-json2html');

module.exports = () => {
    return function (req, res, next) {
        console.log('Representation converter middleware called ...');

        if (req.result) {
            if (req.accepts('json')) {
                console.log('JSON representation selected ...');
                res.send(req.result);
                return;
            }

            if (req.accepts('html')) {
                console.log('HTNL representation selected ...');
                var transform = {
                    'tag': 'div',
                    'html': '${name}:${value}'
                };
                res.send(json2html.transform(req.result, transform));
                return;
            }

            if (req.accepts('application/x-msgpack')) {
                console.log('MessagePack representation selected ...');
                res.type('application/x-msgpack');
                res.send(encode(req.result));
                return;
            }
        } else {
            next();
        }
    };
};