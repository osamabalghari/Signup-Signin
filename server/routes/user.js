const express = require("express")
const { signUp, signIn, getAllUser } = require("../controllers/user")
const { checkSignUp, checkAuth } = require("../middleware/user")

const router = express.Router()



router.post("/signup", checkSignUp, signUp)
router.post("/signin", signIn)
router.get("/getuser", checkAuth, getAllUser)


module.exports = router