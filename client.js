'use strict'

const tls = require('tls');
const fs = require('fs');
const path = require("path");

const PORT = 1337;
const HOST = '127.0.0.1';

let options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl-keys', 'private-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl-keys', 'public-cert.pem')),
    rejectUnauthorized: false
}

let client = tls.connect(PORT, HOST, options, function () {
    // if(client.authorized) {
    //     console.log('Connection authorized by a Certificate Authority.');
    // } else {
    //     console.log('Connection not authorized: ' + client.authorizationError)
    // }

    if(client.authorized || client.authorizationError === 'DEPTH_ZERO_SELF_SIGNED_CERT') {
        console.log('Connection authorized by a Certificate Authority.');
    } else {
        console.log('Connection not authorized: ' + client.authorizationError);
    }

    client.write('I am sending you a text message.');
});

client.on('data', function(data) {
    console.log('Received: %s [its %d bytes long]',
        data.toString().replace(/(\n)/gm,""),
        data.length);
    client.end();
});

client.on('close', function() {
    console.log('Connection closed.');
});

client.on('error', function(error) {
    console.error(error);
    client.destroy();
})

