const express = require("express")
const { signUp, signIn } = require("../controllers/user")
const { checkSignUp } = require("../middleware/user")

const router = express.Router()



router.post("/signup", checkSignUp, signUp)
router.post("/signin", signIn)


module.exports = router