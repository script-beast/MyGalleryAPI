const mongoose = require('mongoose')
const Img = require('./models')
const express = require('express')
const app = express();
const Imgroute = require('./routes/imgs')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/image', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('DataBase Connected')
})

app.use(cors())
app.use(express.json())
app.use('/', Imgroute)

app.listen(4001, () => {
    console.log('listening')
})
