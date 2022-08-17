const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 5000;

const keeperRoutes = require('./routes/KeeperRoutes')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://sarthak123:LwZwAWxhfiRUWo6C@cluster0.8rkm0.mongodb.net/?retryWrites=true&w=majority',  ()=>{

    console.log("Database is connected...........")
})

app.use('/keeper', keeperRoutes)

app.listen(port, () => {
    console.log(`The server is listening on ${port}`)
})