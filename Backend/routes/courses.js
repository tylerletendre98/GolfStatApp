const express = require('express');
const Course = require('../models/course')
const router = express.Router();

router.post(`/newCourse`, async(req,res)=>{
    try{
        const newCourse = new Course({
            courseName: req.body.courseName,
            coursePar: req.body.coursePar,
            privateClub: req.body.privateClub,
            holeOnePar: req.body.holeOnePar,
            holeTwoPar: req.body.holeTwoPar,
            holeThreePar: req.body.holeThreePar,
            holeFourPar: req.body.holeFourPar,
            holeFivePar: req.body.holeFivePar,
            holeSixPar: req.body.holeSixPar,
            holeSevenPar: req.body.holeSevenPar,
            holeEightPar: req.body.holeEightPar,
            holeNinePar: req.body.holeNinePar,
            holeTenPar: req.body.holeTenPar,
            holeElevenPar: req.body.holeElevenPar,
            holeTwelvePar: req.body.holeTwelvePar,
            holeThirteenPar: req.body.holeThirteenPar,
            holeFourteenPar: req.body.holeFourteenPar,
            holeFifteenPar: req.body.holeFifteenPar,
            holeSixteenPar: req.body.holeSixteenPar,
            holeSeventeenPar: req.body.holeSeventeenPar,
            holeEighteenPar: req.body.holeEighteenPar,
            yearEstablished: req.body.yearEstablished,
            cartsAllowed: req.body.cartsAllowed,
            courseImageUrl: req.body.courseImageUrl,
            courseLength: req.body.courseLength,
            courseAddress: req.body.courseAddress,
        });
        await newCourse.save()
        return res.send(newCourse)
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})


module.exports = router;