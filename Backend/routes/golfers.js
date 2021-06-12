const Golfer = require('../models/golfer');
const GolfBag= require('../models/golfbag');
const Round = require('../models/round');
const express = require('express');
const router = express.Router();

//add a new golfer
router.post('/newGolfer', async (req,res)=>{
    try{
        const newGolfer = new Golfer({
            name: req.body.name,
            belongsToClub: req.body.belongsToClub,
            dexterity: req.body.dexterity,
            handicap: req.body.handicap
        });
        await newGolfer.save()
        return res.send(newGolfer)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//get all golfers
router.get('/golfers', async (req,res)=>{
    try{
        const golfers = await Golfer.find()
        res.send(golfers)
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//get one golfer
router.get('/golfer/:id', async (req,res)=>{
    try{
        const golfer = await Golfer.findById(req.params.id);
        if(!golfer){
            return res.status(400).send(`The golfer with the id "${req.params.id}" does not exist.`);
        };
        return res.send(golfer);
    }catch(ex){
        res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

//update a golfer
router.put('/updateGolfer/:id', async (req,res)=>{
    try{
        const golfer = await Golfer.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                belongsToClub: req.body.belongsToClub,
                dexterity: req.body.dexterity,
                handicap: req.body.handicap
            },
            {new: true}
        );
        if(!golfer)
            return res.status(400).send(`The golfbag with the id "${req.params.id}"
            does not exist.`);

            await golfer.save()
            return res.send(golfer)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    };
});

//delete a golfer
router.delete('/deleteGolfer/:id', async (req,res)=>{
    try{
        const golfer = await Golfer.findByIdAndRemove(req.params.id);
        if(!golfer)
        return res.status(400).send(`The golfbag with the id "${req.params.id}" does not exist.`);
        const golfers = await Golfer.find()
        return res.send(golfers);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`)
    };
});

//add golfbag to golfer

router.post('/:golferId/addGolfBag/:golfBagId', async (req,res)=>{
    try{
        const golfer = await Golfer.findById(req.params.golferId);
        if(!golfer)
            return res.status(400).send(`The goler with the Id "${req.params.golferId}" does not exist.`);
        const golfBag = await GolfBag.findById(req.params.golfBagId);
        if(!golfBag)
            return res.status(400).send(`The golfbag with the Id "${req.params.golfBagId}" does not exist.`)
        golfer.golfBag.push(golfBag)
        
        await golfer.save()
        return res.send(golfer)
    }catch(ex){
        return res.status(500).send(`Internal server Error:${ex}.`)
    }
});

//add round to golfer
router.post('/:golferId/addRound/:roundId', async (req,res)=>{
    try{
        const golfer = await Golfer.findById(req.params.golferId);
        if(!golfer)
            return res.status(400).send(`The goler with the Id "${req.params.golferId}" does not exist.`);
        const round = await Round.findById(req.params.roundId);
        if(!round)
            return res.status(400).send(`The round with the Id "${req.params.roundId}" does not exist.`)
        golfer.rounds.push(round)
        
        await golfer.save()
        return res.send(golfer)
    }catch(ex){
        return res.status(500).send(`Internal server Error:${ex}.`)
    }
});




module.exports = router;