const express = require('express');
const connectDB = require('./startup/db');
const golfbag = require('./routes/golfBags');
const golfer = require('./routes/golfers');
const round = require('./routes/rounds');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/golfBag', golfbag);
app.use('/api/golfer', golfer);
app.use('/api/round', round);


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});