const mongoose = require("mongoose")
require("dotenv").config()


const dataBase =async ()=>{

    await  mongoose.connect(process.env.MOONGO_URL)
    console.log(`Database Connected to ${process.env.MOONGO_URL} `);
}

module.exports=dataBase