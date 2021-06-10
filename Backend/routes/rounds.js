const express = require('express');
const Golfer = require('../models/golfer');
const Round = require('../models/round');
const router = express.Router();

router.post('/newRound/:golferId', async (req,res)=>{
    try{
        const newRound = new Round({
            golfers: req.params.golferId,
            courseName: req.body.courseName,
            coursePar: req.params.coursePar,
            holeOne: req.params.holeOne,
            holeTwo: req.params.holeTwo,
            holeThree: req.params.holeThree,
            holeFour: req.params.holeFour,
            holeFive: req.params.holeFive,
            holeSix: req.params.holeSix,
            holeSeven: req.params.holeSeven,
            holeEight: req.params.holeEight,
            holeNine: req.params.holeNine,
            holeTen: req.params.holeTen,
            holeEleven: req.params.holeEleven,
            holeTwelve: req.params.holeTwelve,
            holeThirteen: req.params.holeThirteen,
            holeFourteen: req.params.holeFourteen,
            holeFifteen: req.params.holeFifteen,
            holeSixteen: req.params.holeSixteen,
            holeSeventeen: req.params.holeSeventeen,
            holeEighteen: req.params.holeEighteen,
            roundTotal: req.params.roundTotal,
            underPar: req.total.underPar
        });
        await newRound.save()
        return res.send(newRound)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

module.exports = router;