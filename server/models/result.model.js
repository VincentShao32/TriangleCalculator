const mongoose = require('mongoose')

const Schema = mongoose.Schema

const resultSchema = new Schema({
    sideA: { type: Number, required: true },
    sideB: { type: Number, required: true },
    sideC: { type: Number, required: true },
    angleA: { type: Number, required: true },
    angleB: { type: Number, required: true },
    angleC: { type: Number, required: true },
}, {
    timestamps: true
})

const Result = mongoose.model('Result', resultSchema)

module.exports = Result