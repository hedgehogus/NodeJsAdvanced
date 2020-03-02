https://github.com/nodejs/node

lib -> js code
src -> c++ implementation of oll functions in lib

**V8** -> The actual purpose of this project is to execute the javascript code outside the browser. It is a program that converts Javascript code into lower level or machine code that browser can understand.

**Libuv** -> The purpose of this project is to give access to the Node, the operating system file system. It gives us access to the networking and also handles some aspects of concurrency as well.

*Earlier it is being written as **Process.binding()** and Now they have changed it to **internalBinding()** as they are now inaccessible from user land because they are only available from NativeModule.require() But.*

env->SetMethod(target, "pbkdf2", PBKDF2);  // c++ exports

**libuv by default has threadpoll of 4 threads**

- **Can we use the threadpool for js code or can only nodeJS functions use it?** We can write custom JS that uses the thread pool
- **What functions in node std library use the threadpool?** All 'fs' module functions, some crypto stuff/ Depends on OS (windows vs unix based)
- **How does this threadpool stuff fit into the event loop?** Tasks running in the threadpool are the 'pendingOperations'

- **What functions in node std library use OS's async features?** Almost everything around networking for all OS's. Some other stuff in OS specific
- **How does this os stuff fit into event loop** Tasks using the underlying OS are reflected in 'pendingOSTasks"

## Improving node perfomance

- use node in 'cluster' mode - recommended
- use worker threads - experimental

**PM2 - Production Process Manager with a built-in Load Balancer** - https://github.com/Unitech/pm2 - https://pm2.keymetrics.io/
- npm install -g pm2 
- pm2 start filename.js -i 0 // start // -i - number of instances (0 - default number of logical cores)
- pm2 list // summary of current cluster
- pm2 show filename.js
- pm2 monit // open monitor application in terminal
- pm2 delete filename // stop

**webworker-threads**

## Caching
- we can add index for searching property but it takes memory and time while writing data
- **caching server** between mongoose and mongodb. Caching server cheks if this query been ever executed before
**Redis** - instance of cache server - **in memory data store**
**node-redis** - node implementation of the library
```
const redis = require('redis');
const redisUrl = 'redis://127.0.0.1:6379'
const client = redis.createClient(redisUrl);
client.set('hi', 'there')
client.get('hi', (err,value) => console.log(value))
```
hash set(**redis hashes**)
```
hset('spanish, 'red','rojo');
hget('spanish, 'red, (err,value) => console.log(value));
```
we only have option of storing numbers and letters 
```
client.set('solors', JSON.stringify({red: 'rojo'}));
```
clear cache 
```
client.flushall();

