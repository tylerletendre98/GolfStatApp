const Joi = require('joi');
const bcrypt = require('bcrypt');
const express = require('express');
const Golfer = require('../models/golfer');
const router = express.Router();

function validateLogin(req){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    });
    return schema.validate(req);
}

router.post('/loginGolfer', async (req,res)=>{
    try{
        const {error} = validateLogin(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let golfer = await Golfer.findOne({email: req.body.email});
        if(!golfer) return res.status(400).send(`Invalid email or password.`);

        const validPassword = await bcrypt.compare(req.body.password, golfer.password);

        if (!validPassword) return res.status(400).send('Invalid email or password');

        const token = golfer.generateAuthToken();

        return res.send(token);
    }catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;