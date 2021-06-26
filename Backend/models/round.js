const mongoose = require('mongoose');
// const {golferSchema}= require('./golfer');

const roundSchema = new mongoose.Schema({
    courseName: {type: String, required: true, minlength: 5, maxlength: 50},
    coursePar:{type: Number, required: true},
    holeOne: {type: Number, required: true},
    holeTwo: {type: Number, required: true},
    holeThree: {type: Number, required: true},
    holeFour: {type: Number, required: true},
    holeFive: {type: Number, required: true},
    holeSix: {type: Number, required: true},
    holeSeven: {type: Number, required: true},
    holeEight: {type: Number, required: true},
    holeNine: {type: Number, required: true},
    holeTen: {type: Number, required: true},
    holeEleven: {type: Number, required: true},
    holeTwelve: {type: Number, required: true},
    holeThirteen: {type: Number, required: true},
    holeFourteen: {type: Number, required: true},
    holeFifteen: {type: Number, required: true},
    holeSixteen: {type: Number, required: true},
    holeSeventeen: {type: Number, required: true},
    holeEighteen: {type: Number, required: true},
    roundTotal:{type: Number, required: true},
    underPar:{type: Boolean, required: true, default: false}
});

const Round= mongoose.model('Round', roundSchema);

exports.Round = Round;
