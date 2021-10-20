//how to launch express--save express into a function, call that function 
//all server function is run in here

const express = require('express');
const app = express();
// call the app--listen at port 3000, then call back function
app.listen(3000, () => console.log('listening at 3000'));
//tells the server to go to the public folder-default is to index.html
app.use(express.static('public'));
//address that we will recieve the post, next is the call back function 
app.post('/api', (request, response) => {
  console.log(request);
})