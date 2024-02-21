const { default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const keysecret = "qwertyuioplkjhgfdsazxcvbnmkjhgfd"

const userSchema =new mongoose.Schema({
    Fname: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    Password: {
        type: String,
        required: true,
        minlength: 6
    },
    Cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
})



//hash password 

userSchema.pre("save",async function (next) {

    if(this.isModified("Password")){
    this.Password= await bcrypt.hash(this.Password,12)
    this.Cpassword= await bcrypt.hash(this.Cpassword,12)   
} 
    next()
})

// token generate

userSchema.methods.generateAuthtoken = async function (){
    try {
        let token32 = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"1d"
        });

        this.tokens = this.tokens.concat({token:token32});
        await this.save();
        return token32;
    } catch (error) {
        res.status(422).json(error)
    }
}

const userdb = new mongoose.model("users", userSchema)
module.exports = userdb;