const router = require('express').Router();
const Spell = require('../models/Spell.model');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation/validation');

router.get('/', /*verify,*/ async (req, res) => {
    const spells = await Spell.find({});
    if (spells.length > 0) {
        res.status(200).json(spells);
    } else {
        res.status(404).json({
            result: "Failure",
            message: `Error: 404 Spells not found`
        });
    }
});

//Adding data to DB. Will be removed
router.post('/addSpell', async (req, res) => {

    const house = new Spell({
        name:req.body.name,
        unforgivable: req.body.unforgivable,
        classification: req.body.classification,
        use: req.body.use,
        details: req.body.details,
    });

    await house.save()
        .then(() => {
            res.send({result: house})
        }).catch(err => res.status(400).send(err))
});

//LOGIN
// router.post('/login', async (req, res) => {
//
//     ///validate user inputs
//     const {error} = loginValidation(req.body);
//     if (error) return res.status(400).json({result:"Failure", message: error.details[0].message});
//
//     ///check if user exists
//     const user = await User.findOne({email: req.body.email});
//     if (!user) return res.status(400).json({result:"Failure", message: 'User with this email not found'});
//
//     ///password validation
//     const validPassword = await bCrypt.compare(req.body.password, user.password);
//     if (!validPassword) return res.status(400).json({result:"Failure", message: 'Incorrect password'});
//
//     ///create a web token
//     const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
//     res.header('auth-token', token);
//
//     res.json({result: 'Success', auth_token: token, username: user.username});
//
// });

module.exports = router;