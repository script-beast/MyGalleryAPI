const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImgSchema = new Schema({
    ImgName: {
        type: String,
        required: true
    },
    ImgURL: {
        type: String,
        required: true
    },
    ImgDetails: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Img', ImgSchema)