
const mongoose = require("mongoose")
// const DB= "mongodb+srv://maskarprathmesh22:prathamesh@cluster0.diskboq.mongodb.net/Authusers?retryWrites=true&w=majority"
const DB= "mongodb://localhost:27017"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("Database Connected")).catch((errr)=>{
    console.log(errr);
})