const GolfBag = require('../models/golfbag');
const express = require('express');
const router = express.Router();

router.post('/addGolfBag', async (req,res)=>{
    try{
        const golfBag = new GolfBag({
            driver: req.body.driver,
            threeWood: req.body.threeWood,
            fiveWood: req.body.fiveWood,
            threeHybrid: req.body.threeHybrid,
            ironSet: req.body.ironSet,
            wedges: req.body.wedges,
            putter: req.body.putter
        });
        
        await golfBag.save()
        return res.send(golfBag)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//Get all golf bags
router.get(`/getGolfbags`, async (req,res)=>{
    try{
        const golfbags = await GolfBag.find();
        return res.send(golfbags);
    }catch (ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//Get one golf bag
router.get(`/getOneBag/:id`, async (req,res)=>{
    try{
        const golfbag = await GolfBag.findById(req.params.id);
        // if(!golfbag){
        //     return res.status(400).send(`The golfbag with the id "${req.params.id}" does not exist.`);
        // };
        return res.send(golfbag);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
});

//delete a golfbag

router.delete(`/deleteGolfBag/:id`, async (req,res)=>{
    try{
        const golfBag = await GolfBag.findByIdAndRemove(req.params.id);
        if(!golfBag)
        return res.status(400).send(`The golfbag with the id "${req.params.id}" does not exist.`);
        const golfBags = await GolfBag.find()
        return res.send(golfBags);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
});

router.put(`/updateGolfBag/:id`, async (req,res)=>{
    try{
        const golfBag = await GolfBag.findByIdAndUpdate(req.params.id,
            {
            driver: req.body.driver,
            threeWood: req.body.threeWood,
            fiveWood: req.body.fiveWood,
            threeHybrid: req.body.threeHybrid,
            ironSet: req.body.ironSet,
            wedges: req.body.wedges,
            putter: req.body.putter
            },
            {new: true}
        );
        if(!golfBag)
            return res.status(400).send(`The golfbag with the id "${req.params.id}"
            does not exist.`);

            await golfBag.save()
            return res.send(golfBag)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;