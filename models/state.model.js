const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Types = mongoose.Types

const state = new Schema({
    id : { type: Number },
    name: { type: String },
    text: { type: String },
    private: { type: Boolean, default: false }, 
    author: { type: Types.ObjectId, ref: user }, 
})

const stateModel = mongoose.model('state', state)

module.exports = stateModel