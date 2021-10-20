//how to launch express--save express into a function, call that function 
//all server function is run in here

const express = require('express');
const app = express();
// call the app--listen at port 3000, then call back function
app.listen(3000, () => console.log('listening at 3000'));
//tells the server to go to the public folder-default is to index.html
app.use(express.static('public'));
//to handle JSON and protects server from a data dump
app.use(express.json({limit: '1mb'}))
//address that we will recieve the post, next is the call back function 
app.post('/api', (request, response) => {
  console.log("I got a request!");
  console.log(request.body);
})