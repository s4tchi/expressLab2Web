const State = require('../models/state.model')
const { getUserByEmailWithStates } = require('../proxy/user.proxy')

const getStateByAutor = async (email) => {
    try {
        const user = await getUserByEmailWithStates(email)
        const state = await State.find({author: user._id})
        return state
    }
    catch(e) {
        throw e
    }
}

const getStateById = async (id) => {
    try {
        const state = await State.findById(id)
        return state
    }
    catch(e) {
        throw e
    }
}

const createState = async (name, text, authorEmail, private) => {
    try {
        const user = await getUserByEmailWithStates(authorEmail)
        const state = new State({name, text, private, author: user._id})
        await state.save()
    }
    catch(e) {
        throw e
    }
}

module.exports = { getStateByAutor, getStateById, createState }