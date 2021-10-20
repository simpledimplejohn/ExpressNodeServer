//how to launch express--save express into a function, call that function 


const express = require('express');
const app = express();
// call the app--listen at port 3000, then call back function
app.listen(3000, () => console.log('listening at 3000'));
//
app.use(express.static('public'));