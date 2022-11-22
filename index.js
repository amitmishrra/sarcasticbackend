const express = require ("express");
const app = express();
const db = require("./DB/Connection");
const mongoose = require("mongoose");
require("./Schema/quotes")
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.json())
app.use(cors())

app.listen(5000,(req, res) =>{
    console.log("Server is running")
})

app.get("/",(req, res)=>{
    res.send("Hello Server")
})
const Quotes = mongoose.model("quotesData");
app.get("/getQuotes",async (req, res)=>{
    const quote = await Quotes.find()
   res.send(quote)
})

app.post('/postData',async (req,res)=>{
    const {quote, likes} = req.body;
    try {

        await Quotes.create({
            quote : quote,
            likes : likes
        })
        res.send({msg : "posted"})
    } catch (error) {

        res.send({msg : "something went wrong"})
        console.log(error)
    }
        
})

app.patch("/updateLikes/:id",async (req,res)=>{
    const newLike = req.body
    console.log(newLike.newLike)
    try {
      const result = await Quotes.findOneAndUpdate({_id : req.params.id}, {$set : {likes : newLike.newLike}}, {useFindAndModify : false})
        res.status(201).send({msg :"updated succesfully"})
    } catch (error) {
        res.send("Something went wrong")
        console.log(error)
    }
})