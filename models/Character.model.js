const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
        name: String,
        house: String,
        imageUrl: String,
        patronus: String,
        species: String,
        bloodStatus: String,
        role: String,
        school: String,
        deathEater: Boolean,
        dumbledoresArmy: Boolean,
        orderOfThePhoenix: Boolean,
        ministryOfMagic: Boolean,
        alias: String,
        wand: String,
        boggart: String,
        animagus: String,
    },
    {
        timestamp: true
    });

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;
