const { default: mongoose } = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }
    // description:{
    //     type:String,
    //     required:true
    // },
    // image:{
    //     type: String,
    //     required:true
    // }
})

const announcementDB = new mongoose.model("announcements", announcementSchema)
module.exports = announcementDB;