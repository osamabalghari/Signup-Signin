const jwt = require("jsonwebtoken")
require("dotenv").config()

const checkSignUp = (req, res, next) => {
    const { fullName, email, password } = req.body

    if (!fullName) {
        res.status(400).json({ success: false, message: "FullName Is required" })
        return
    }
    if (!email) {
        res.status(400).json({ success: false, message: "email Is required" })
        return
    }
    if (!password) {
        res.status(400).json({ success: false, message: "password Is required" })
        return
    }
    next()
}

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.auth_token
        if (!token) {
            res.status(400).json({ success: false, message: "Not Authorized" })
            return
        }
        const user = jwt.verify(token, process.env.SECRET_KEY)
        req.user = user
        next()
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = { checkSignUp, checkAuth }