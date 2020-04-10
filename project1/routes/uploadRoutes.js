const AWS = require('aws-sdk');
const keys = require('../config/keys');

const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey
})

// npm install --save aws-sdk

module.exports = app => {
    app.get('/api/upload', (req, res) => {

    })
};