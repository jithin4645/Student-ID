var express = require("express");
require("./db")
const stuModel = require("./model/student");

var app = express();
app.use(express.json());
var PORT = 8081;

//api to add data to db
app.post("/",async(req, res)=>{
    try {
        await stuModel(req.body).save();
        res.send("data added successsully!!");
    } catch (error) {
        res.send(error); 
    }
});
//delete data from db
app.delete('/remove/:id',async(req, res)=>{
    try {
        var data = await stuModel.findByIdAndDelete (req.params.id,req.body);
        res.send("Deleted successfully");
    } catch (error) {
        res.send(error);
    }
});
// to update one data
app.put("/edit/:id", async (req, res) =>{
    try {
        await stuModel.findByIdAndUpdate(req.params.id, req.body);
        res.send( "updated successfully");
    } catch (error) {
        res.send(error);
    }
});

//api to read the data in the db
app.get("/",async (req,res)=>{
    try {
        var data = await stuModel.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});


app.listen(PORT,(req, res) => {
    console.log(`server is listening in port ${PORT}`);
});