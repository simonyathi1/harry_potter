const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
        name: String,
        emblem: String,
        history: String,
    });


const House = mongoose.model('House', houseSchema);
module.exports = House;