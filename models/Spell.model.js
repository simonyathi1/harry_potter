const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spellSchema = new Schema({
    name: String,
    unforgivable: Boolean,
    classification: String,
    use: String,
    details: String
});

const Spell = mongoose.model('Spell', spellSchema);
module.exports = Spell;