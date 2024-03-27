const express = require("express");
const userdb = require("../models/userSchema");
const announcementDB = require("../models/announcementSchema");
const router = new express.Router();    
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// for user registeration

router.post("/api/register", async (req, res) => {
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "Fill all the details" })
    }
    try {
        const preuser = await userdb.findOne({ Email: email })
        if (preuser) {
            res.status(422).json({ error: "Email aready exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Does Not Match" })
        } else {
            const finalUser = new userdb({
                Fname: fname, Email: email, Password: password, Cpassword: cpassword
            })

            // Password hashing
            const storeData = await finalUser.save();
            res.status(201).json({ status: 201, storeData })
        }
    } catch (error) {
        res.status(422).json({ error });
    }
})

router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "Fill all the details" })
    }
    
     try {
        const userValid = await userdb.findOne({ Email: email })
        if (userValid) {
            const isMatch = await bcrypt.compare(password, userValid.Password)
            if (!isMatch) {
                res.status(422).json({ error: "Password not match" })
            } else {

                // token generate
                const token = await userValid.generateAuthtoken();

                // cookiegenerate
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({ status: 201, result })
            }
        }
        else {
            res.status(422).json({ error: "Email not found" })
        }

    } catch (error) {

    }
});

//user validation

// user valid
router.get("/api/validuser", authenticate , async (req, res) => {
    try {
        const ValidUserOne = await userdb.findOne({ _id: req.userId });
        res.status(201).json({ status: 201, ValidUserOne });
    } catch (error) {
        res.status(401).json({ status: 401, error });
    }
});

// Post method for announcements(Images)

router.post("/api/welcome",async(req,res)=>{
    // const {title} = req.body;
    // console.log(typeof(title));
    const announcementsData = await announcementDB.find()
    // console.log(typeof(announcementsTitle));
    // console.log(announcementsTitle);
    res.json(announcementsData);
});
// router.post("/api/welcome",async(req,res)=>{
//     console.log(req.title);
//     const { title } = req.query;
//     console.log("title"+title);
//     const announcementsTitle = await announcementDB.find()
//     console.log(announcementsTitle);
//     // res.json(announcementsTitle)
//     // const announcementsDesc = await announcementDB.findOne({ description: description })
//     // const announcementsImage = await announcementDB.findOne({ image: image })
//     // if(announcementsTitle.length > 2){
//     //     console.log("True");
//     // }
//     // console.log(announcementsTitle);
//     // console.log(announcementsDesc);    
//     // res.status(201).json({ status: 201, announcementsTitle })

//     // announcementDB.find().toArray((err, announcements) => {
//     //     if (err) {
//     //       console.error('Error fetching users:', err);
//     //       res.status(500).json({ error: 'Internal server error' });
//     //       return;
//     //     }
  
//     //     res.json(announcements);
//       //});

//     try {
//         const announcementsTitle = await announcementDB.find();
//         // const announcementsDesc = await announcementDB.findOne({ description: description })
//         // const announcementsImage = await announcementDB.findOne({ image: image })

//         res.json(announcementsTitle);
//         // res.status(201).json({ status: 201, announcementsTitle, message: "success"})
//         // res.send(announcementsTitle);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

module.exports = router;