const router = require('express').Router();
const verify = require('../verifyToken');
const House = require('../models/House.model');
const Spell = require('../models/Spell.model');
// const {AccountHolder, PersonalDetails} = require('../models/AccountHolder.model');

router.get('/', /*verify,*/ async (req, res) => {
    const houses = await House.find({});
    if (houses.length > 0) {
        res.status(200).json(houses);
    } else {
        res.status(404).json({
            result: "Failure",
            message: `Error: 404 Houses not found`
        });
    }
});

//Adding data to DB. Will be removed
router.post('/addHouse', async (req, res) => {

    const house = new House({
        name:req.body.name,
        emblem:req.body.emblem,
        history:req.body.history,
    });

    await house.save()
        .then(() => {
            res.send({result: house})
        }).catch(err => res.status(400).send(err))
});

module.exports = router;

// router.get('/search', verify, async (req, res) => {
//
//     const accountHolder = await WashedAccountHolder.find({'accountSummary.clientReference': req.query.clientReference});
//     if (accountHolder.length > 0) {
//         res.json(accountHolder[0]);
//     } else {
//         const accountHolder = await AccountHolder.find({'accountSummary.clientReference': req.query.clientReference});
//         if (accountHolder.length > 0) {
//             res.json(accountHolder[0]);
//         } else {
//             res.status(404).json({
//                 result: "Failure",
//                 message: `Error: 404 Account holder with ref:${req.query.clientReference} not found`
//             })
//         }
//     }
// });
//
// router.get('/data/wash', verify, async (req, res) => {
//
//     const personalDetailsExternalSchema = await PersonalDetailsExternalSchema.find({'personal_details.id_number': req.query.idNumber});
//     if (personalDetailsExternalSchema.length > 0) {
//         res.json(personalDetailsExternalSchema[0]);
//     } else {
//         res.status(404).json({
//             result: "Failure",
//             message: `Error: 404 Person with ID number: ${req.query.idNumber} not found`
//         })
//     }
// });
//
// router.post('/submit', verify, async (req, res) =>{
//     const washedAccountHolder = new WashedAccountHolder(req.body);
//     const existingRecord = await WashedAccountHolder.find({'personalDetails.idNumber': req.body.personalDetails.idNumber});
//     console.log(existingRecord.length);
//
//     if (existingRecord.length > 0) {
//         await washedAccountHolder.updateOne({'personalDetails.idNumber': req.body.personalDetails.idNumber})
//             .then(() => {
//                 res.send({action:"Update existing washed record", result: washedAccountHolder})
//             }).catch(err => res.status(400).send(err))
//     }else {
//         await washedAccountHolder.save()
//             .then(() => {
//                 res.send({action:"Add new washed record", result: washedAccountHolder})
//             }).catch(err => res.status(400).send(err))
//     }
// });