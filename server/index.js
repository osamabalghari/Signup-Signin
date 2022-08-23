const express = require("express")
require("dotenv").config()
const cors = require("cors")
const userRouter = require("./routes/user")
const dataBase = require("./db/database")


dataBase()
const app = express()
const env = process.env.PORT


app.use(cors())
app.use(express.json())
app.use("/auth/c1/", userRouter)
app.listen(env, () => {
    console.log(`Server Running on ${env}`);
})