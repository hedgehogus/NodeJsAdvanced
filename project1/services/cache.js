const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function () {

    const key = Object.assign({}, this.getQuery, {
      collection: this.mongooseCollection.name  
    });

    return exec.apply(this, arguments);
}