const User = require('../models/user.model')

const getUserByEmailWithStates = async (email) => {
    try {
        const user = await User.findOne({email})
        console.log(user, email)
        return user
    }
    catch(e) {
        throw e
    }
}

module.exports = { getUserByEmailWithStates }