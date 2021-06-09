const GolfBag = require('../models/golfbag');
const express = require('express');
const router = express.Router();

router.post('/addGolfBag', async (req,res)=>{
    try{
        const golfBag = new GolfBag({
            driver: req.body.driver,
            threeWood: req.body.threeWood,
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

module.exports = router;