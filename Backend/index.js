const express = require('express');
const connectDB = require('./startup/db')

const app = express();

app.listen(3000, function(){
    console.log('Server started. Listening on port 3000.');
});

connectDB();