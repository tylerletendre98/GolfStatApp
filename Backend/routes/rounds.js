const express = require('express');
const Golfer = require('../models/golfer');
const {Round} = require('../models/round');
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

router.delete('/deleteRound/:golferId/:roundId', async (req,res)=>{
    try{
       const golfer = await Golfer.findById(req.params.golferId);
       if (!golfer) return res.status(400).send(`The user id "${req.params.golferId}" does not exist.`);

       const filteredRounds = golfer.rounds.filter((round)=> round._id != req.params.roundId);
       
       golfer.rounds = filteredRounds
       await golfer.save();
       return res.send(golfer)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
})

// router.delete('/deleteRound/:golferId/:roundId', async (req,res)=>{
//     try{
//        const golfer = await Golfer.findById(req.params.golferId);
//        if (!golfer) return res.status(400).send(`The user id "${req.params.golferId}" does not exist.`);
    
//        const round = golfer.rounds.filter((round)=> round._id= req.params.roundId);
//        console.log(round)
//        await round.remove()
//        await golfer.save()
//        return res.send(golfer)
//     }catch(ex){
//         return res.status(500).send(`Internal Server Error: ${ex}`)
//     }
// })

module.exports = router;