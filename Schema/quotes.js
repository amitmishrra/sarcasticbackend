const mongoose = require("mongoose");

const quotesData = new mongoose.Schema(
    {
        quote : String,
        likes : Number
    },{
        collection : "quotesData"
    }
);

mongoose.model("quotesData", quotesData);