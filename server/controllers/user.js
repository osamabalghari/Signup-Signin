const User = require("../models/User")
const bcrypt = require("bcrypt")
require("dotenv").config()
const jwt = require("jsonwebtoken")


const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        const hash = bcrypt.hashSync(password, 10);


        const user = await User.create({
            fullName,
            email,
            password: hash

        })

        if (!user) {
            res.status(400).json({ success: true, message: "Some Credentials are wrong or empty please check your name email password" })
        }


        res.status(200).json({ success: true, message: "Successfully create a new Account", user })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }

}
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ success: false, message: "User Not Exist" })
            return

        }
        const validate = bcrypt.compareSync(password, user.password);
        if (!validate) {
            res.status(400).json({ success: false, message: "password did not match" })
            return
        }
        const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: 86400 });
        res.status(200).json({ success: true, validate, token })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }

}

module.exports = { signUp, signIn }