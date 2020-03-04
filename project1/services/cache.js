const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = async function () {

    const key = JSON.stringify(Object.assign({}, this.getQuery, {
      collection: this.mongooseCollection.name  
    }));

    // see if we have a value for 'key' in redis
    const cacheValue = await client.get(key);

    // if we do, return that
    if (cacheValue) {
        console.log(cacheValue);
    }

    // Otherwise, issue the query and store the result in redis

    const result = await exec.apply(this, arguments);
    console.log(result);
}