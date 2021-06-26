const Joi = require('joi');
const mongoose= require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');
const {golfBagSchema} = require('./golfbag');
const {Round} = require('./round');

const golferSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2, maxlenght: 60},
    email:{type: String, unique: true, required: true, minlength: 5, maxlenght: 255},
    password:{type: String, required: true, maxlenght: 1024, minlength: 5},
    belongsToClub:{type: Boolean, default: false},
    golfBag: {type: {golfBagSchema}},
    dexterity: {type: String, required: true},
    handicap: {type: Number, required: true},
    friends:{type:Array , default: []},
    rounds: {type: [Round.schema]}
});

golferSchema.methods.generateAuthToken = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email, 
        belongsToClub: this.belongsToClub, 
        golfBag: this.golfBag, 
        dexterity: this.dexterity,
        handicap: this.handicap,
        rounds: this.rounds}
        , config.get('jwtSecret'));
};

const Golfer= mongoose.model('Golfer', golferSchema);

function validateGolfer(golfer){
    const schema = Joi.object({
        name: Joi.string().min(5).max(60).required(),
        email: Joi.string().min(5).max(255).email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(golfer)
}

module.exports = Golfer;
module.exports.validateGolfer = validateGolfer;