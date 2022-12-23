const mongoose = require('mongoose')

const Schema = mongoose.Schema

const user = new Schema({
    id : { type: Number },
    name: { type: String },
    login: { type: String, unique: true, required: true },
    password: { type: String, required: true }, 
    favorite_car: { type: String, default: 'Нет таких' },
})

const userModel = mongoose.model('user', user)

module.exports = userModel