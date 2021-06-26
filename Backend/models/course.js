const mongoose= require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {type: String, required: true, minlength: 2, maxlenght:50},
    coursePar: {type:Number, required: true},
    privateClub: {type: Boolean, required: true},
    holeOnePar: {type: Number, required: true},
    holeTwoPar: {type: Number, required: true},
    holeThreePar: {type: Number, required: true},
    holeFourPar: {type: Number, required: true},
    holeFivePar: {type: Number, required: true},
    holeSixPar: {type: Number, required: true},
    holeSevenPar: {type: Number, required: true},
    holeEightPar: {type: Number, required: true},
    holeNinePar: {type: Number, required: true},
    holeTenPar: {type: Number, required: true},
    holeElevenPar: {type: Number, required: true},
    holeTwelvePar: {type: Number, required: true},
    holeThirteenPar: {type: Number, required: true},
    holeFourteenPar: {type: Number, required: true},
    holeFifteenPar: {type: Number, required: true},
    holeSixteenPar: {type: Number, required: true},
    holeSeventeenPar: {type: Number, required: true},
    holeEighteenPar: {type: Number, required: true},
    yearEstablished:{type: Number},
    cartsAllowed: {type: Boolean},
    courseImageUrl:{type:String,},
    courseLength:{type:Number, required: true},
    courseAddress: {type:String, require: true},
    dateModified: {type:Date, default: Date.now}
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;