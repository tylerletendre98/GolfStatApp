const express = require('express');
const GolfBag = require('./models/golfbag');
const connectDB = require('./startup/db');
const golfbag = require('./routes/golfBags');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/golfBag', golfbag);

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});