const express = require('express')
const app = express()
const mongoose = require('mongoose')
const input = require('./routes/input')

app.use(express.json())
app.use(express.urlencoded())

const uri = 'mongodb+srv://Vincent:Wearablerook32@cluster0.h19ayor.mongodb.net/test'
mongoose.connect(uri, {useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use('/api/input', input)

app.get('/api', (req, res) => {
    res.send('Server is up')
})

app.listen(5000)