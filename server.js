const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 1993;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

///connect to mongo DB
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB connection established successfully");
});

/// import routes
const charactersRoute = require('./routes/characters.routes');
const housesRoute = require('./routes/houses.routes');
const spellsRoute = require('./routes/spells.routes');

app.get('/sortingHat', (req, res) => {
    const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    const i = Math.floor(Math.random() * 4);
    console.log(houses[i]);
    const house = houses[i];

    res.status(200).json({house: house});
});
app.use('/characters', charactersRoute);
app.use('/houses', housesRoute);
app.use('/spells', spellsRoute);

app.listen(port, () => console.log(`Server Up and running on port ${port}`));
