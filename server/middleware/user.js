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

module.exports = { checkSignUp }