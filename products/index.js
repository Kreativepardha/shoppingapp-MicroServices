const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

const app = express()

app.get("/", async (req,res) => {

    return res.json({
        message: "products"
    })
})

app.listen(PORT, () => {
    console.log(`produts Server started at port: ${PORT}`)
})