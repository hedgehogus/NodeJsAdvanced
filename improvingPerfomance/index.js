const cluster = require('cluster');
const crypto = require('crypto');

// is the file being executed in master mode?
if (cluster.isMaster){
    // Cause index.js to be executed *again* but in child(slave) mode
    cluster.fork();
    cluster.fork(); // the count of fork need match the number of cores
 //   cluster.fork();
 //   cluster.fork();
} else {
    // Im a child, Im going to act like a server and do nothing else
    const express = require('express');
    const app = express();

    /*function doWork(duration){
        const start = Date.now();
        while(Date.now() - start < duration){ }
    }*/

    app.get('/', (req,res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there');
        });
    })

    app.get('/fast', (req, res) => {
        res.send('this was fast');
    })
    app.listen(4000);
}