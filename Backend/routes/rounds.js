const express = require('express');
const Golfer = require('../models/golfer');
const { findById, findByIdAndRemove, findByIdAndDelete } = require('../models/round');
const Round = require('../models/round');
const router = express.Router();

router.post('/newRound', async (req,res)=>{
    try{
        const newRound = new Round({
            courseName: req.body.courseName,
            coursePar: req.body.coursePar,
            holeOne: req.body.holeOne,
            holeTwo: req.body.holeTwo,
            holeThree: req.body.holeThree,
            holeFour: req.body.holeFour,
            holeFive: req.body.holeFive,
            holeSix: req.body.holeSix,
            holeSeven: req.body.holeSeven,
            holeEight: req.body.holeEight,
            holeNine: req.body.holeNine,
            holeTen: req.body.holeTen,
            holeEleven: req.body.holeEleven,
            holeTwelve: req.body.holeTwelve,
            holeThirteen: req.body.holeThirteen,
            holeFourteen: req.body.holeFourteen,
            holeFifteen: req.body.holeFifteen,
            holeSixteen: req.body.holeSixteen,
            holeSeventeen: req.body.holeSeventeen,
            holeEighteen: req.body.holeEighteen,
            roundTotal: req.body.roundTotal,
            underPar: req.body.underPar
        });
        await newRound.save()
        return res.send(newRound);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/addRound/:golferId', async (req,res)=>{
    try{
        const golfer = await Golfer.findById(req.params.golferId)
        const newRound = new Round({
            courseName: req.body.courseName,
            coursePar: req.body.coursePar,
            holeOne: req.body.holeOne,
            holeTwo: req.body.holeTwo,
            holeThree: req.body.holeThree,
            holeFour: req.body.holeFour,
            holeFive: req.body.holeFive,
            holeSix: req.body.holeSix,
            holeSeven: req.body.holeSeven,
            holeEight: req.body.holeEight,
            holeNine: req.body.holeNine,
            holeTen: req.body.holeTen,
            holeEleven: req.body.holeEleven,
            holeTwelve: req.body.holeTwelve,
            holeThirteen: req.body.holeThirteen,
            holeFourteen: req.body.holeFourteen,
            holeFifteen: req.body.holeFifteen,
            holeSixteen: req.body.holeSixteen,
            holeSeventeen: req.body.holeSeventeen,
            holeEighteen: req.body.holeEighteen,
            roundTotal: req.body.roundTotal,
            underPar: req.body.underPar
        });
        newRound.save()
        golfer.rounds.push(newRound)
        golfer.save()
        return res.send(golfer)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}.`)
    }
})

router.get('/rounds', async (req,res)=>{
    try{
        const rounds = await Round.find()
        res.send(rounds)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.delete('/deleteRound/:roundId', async (req,res)=>{
    try{
        const golfer = await Golfer.findById(req.params.golferId)
        golfer.rounds.findByIdAndRem(req.params.roundId)
        golfer.save()
        return res.send(golfer)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
})

module.exports = router;