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

module.exports = router;