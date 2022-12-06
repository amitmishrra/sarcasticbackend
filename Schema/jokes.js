const mongoose = require("mongoose");

const jokesData = new mongoose.Schema(
    {
        path : String,
        likes : Number
    },{
        collection : "jokesData"
    }
);

mongoose.model("jokesData", jokesData);