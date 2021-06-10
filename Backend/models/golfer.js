const mongoose = require('mongoose');
const {golfBagSchema} = require('./golfbag');
const {roundSchema} = require('./round');

const golferSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2, maxlenght: 60},
    belongsToClub:{type: Boolean, default: false},
    golfBag: {type: [golfBagSchema]},
    dexterity: {type: String, required: true},
    handicap: {type: Number, required: true},
    rounds: {type:[roundSchema], default: []}
});


const Golfer = mongoose.model('Golfer', golferSchema);

module.exports = Golfer;