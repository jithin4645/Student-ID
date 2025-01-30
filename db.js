const mongoose = require("mongoose");

//mongoose.connect("ur1").then({}=>{}).catch({}=>{})

mongoose.connect(
    "mongodb+srv://jithinnath14:jithin@cluster0.4i3v9.mongodb.net/jithinit?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>{console.log("connected to DB")})
.catch((err)=>{console.log(err)})