const router = require('express').Router();
const verify = require('../verifyToken');
const Character = require('../models/Character.model');
// const {AccountHolder, PersonalDetails} = require('../models/AccountHolder.model');

router.get('/', /*verify,*/ async (req, res) => {
    const characters = await Character.find({});
    if (characters.length > 0) {
        res.status(200).json(characters);
    } else {
        res.status(404).json({
            result: "Failure",
            message: `Error: 404 Characters not found`
        });
    }
});

//Adding data to DB. Will be removed
router.post('/addCharacter', async (req, res) => {

    const character = new Character({
        name: req.body.name,
        house: req.body.house,
        imageUrl: req.body.imageUrl,
        patronus: req.body.patronus,
        species: req.body.species,
        bloodStatus: req.body.bloodStatus,
        role: req.body.role,
        school: req.body.school,
        deathEater: req.body.deathEater,
        dumbledoresArmy: req.body.dumbledoresArmy,
        orderOfThePhoenix: req.body.orderOfThePhoenix,
        ministryOfMagic: req.body.ministryOfMagic,
        alias: req.body.alias,
        wand: req.body.wand,
        boggart: req.body.boggart,
        animagus: req.body.animagus
        ,
    });

    await character.save()
        .then(() => {
            res.send({result: character})
        }).catch(err => res.status(400).send(err))
});

module.exports = router;
