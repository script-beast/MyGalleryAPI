const mongoose = require('mongoose')
const Img = require('./models')
const express = require('express')
const app = express();
const Imgroute = require('./routes/imgs')
const cors = require('cors')
const PORT = process.env.PORT || 4001

mongoose.connect('mongodb+srv://fullimagesdb:images143@cluster0.hxc4m.mongodb.net/ImagesDB?retryWrites=true&w=majority', {
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

app.listen(PORT, () => {
    console.log('listening')
})
