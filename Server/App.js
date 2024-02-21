const express = require("express");
const router = require("./routes/router");
const app = express();
const port = 8009;
const cors =require("cors");
const cookieParser = require("cookie-parser");
require("./db/conn");

// app.get("/", (req,res)=>{
//     res.status(201).json("server created")
// })

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(router);

app.listen(port,()=>{
    console.log(`Server started at port number: ${port}`);
})

module.exports =app;