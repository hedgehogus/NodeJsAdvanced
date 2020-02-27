const express = require('express');
const app = express();
const Worker = require('webworker-threads').Worker;


app.get('/', (req,res) => {
   const worker = new Worker(function() {
        worker.onMessage = function() {
            let counter = 0;
            while(counter < 1e9){
                counter++;
            }

            postMessage(counter);
        }
   });
   worker.onMessage = function(message) {
        console.log(message.data);
        res.send('' + message.data);
   }

   worker.postMessage();
    res.send('Hi there');
})

app.get('/fast', (req, res) => {
    res.send('this was fast');
})
app.listen(4000);
