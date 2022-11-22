const mongoose = require("mongoose");
module.exports  = mongoose.connect("mongodb+srv://sarcastic:oneTwoThree@cluster0.2wmn39f.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected with database;")
}).catch(e=>{
    console.log("error in connection;", e)
});