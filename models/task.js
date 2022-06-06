const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name : {type : String, required : true}
}, {versionKey : false, timestamps : true});

module.exports = mongoose.model("task", taskSchema);