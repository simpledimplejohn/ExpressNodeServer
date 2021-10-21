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

// make an array to store the data from the API call
const database = [];

//address that we will recieve the post, next is the call back function 
app.post('/api', (request, response) => {
  console.log("I got a request!");
  
  //you always need a response after your request send afterwards
  //use .then to handle the promise that fetch returns
  const data = request.body;
  database.push(data);
  console.log("the data is :", data);
  console.log("the database is", database);

  response.json({
    status: 'success',
    latitude: data.lat,
    longitude: data.lon
  });
})

