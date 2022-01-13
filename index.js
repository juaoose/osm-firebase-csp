const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('booted express on 8080');
});

const twitchextensioncsp = require('twitchextensioncsp');
app.use(twitchextensioncsp({
    clientID: '<change-me>',
    enableRig: false,
    imgSrc: [
        'https://*.tile.openstreetmap.org'
    ],
    mediaSrc: [
    ],
    connectSrc: [
        'wss://*.firebaseio.com'
    ]
}));

app.use('/extension/', express.static(__dirname + '/build/'));