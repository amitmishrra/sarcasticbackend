const mongoose = require("mongoose");

const jokesData = new mongoose.Schema(
    {
        joke : String,
        likes : Number
    },{
        collection : "jokesData"
    }
);

mongoose.model("jokesData", jokesData);