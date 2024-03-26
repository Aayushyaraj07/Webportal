const { default: mongoose } = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:Image,
        required:true
    }
})

const announcementDB = new mongoose.model("users", announcementSchema)
module.exports = announcementDB;