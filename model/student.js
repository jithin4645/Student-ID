const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    studentName:String,
    studentAge:Number,
});

const studentModel = mongoose.model("student", studentSchema);
module.exports = studentModel;