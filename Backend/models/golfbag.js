const mongoose= require('mongoose');

const golfBagSchema = new mongoose.Schema({
    driver: { type: String, minlength: 2, maxlength:50},
    threeWood: { type: String, minlength: 2, maxlength:50},
    fiveWood: { type: String, minlength: 2, maxlength:50},
    threeHybrid: { type: String, minlength: 2, maxlength:50},
    fiveHybrid: { type: String, minlength: 2, maxlength:50},
    ironSet: { type: String, minlength: 2, maxlength:50},
    wedges: { type: String, minlength: 2, maxlength:50},
    putter: { type: String, minlength: 2, maxlength:50},
    dateModified: {type:Date, default: Date.now}
});

const GolfBag = mongoose.model('GolfBag', golfBagSchema);

module.exports = GolfBag;
