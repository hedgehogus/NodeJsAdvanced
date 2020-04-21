const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const requierLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');

const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey
})

// npm install --save aws-sdk
// npm install --save uuid

module.exports = app => {
    app.get('/api/upload', requierLogin, (req, res) => {
        const key = `${req.user.id}/${uuid()}.jpeg`;

        s3.getSignedUrl('putObject', {
            Bucket: 'name-of-the-bucket',
            ContentType: 'jpeg',
            Key: key
        }, (err, url) => res.send({ key, url }));
    })
};