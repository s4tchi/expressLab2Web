const {Router} = require('express');
const { getUserByEmailWithStates } = require('../proxy/user.proxy')

const router = Router();


module.exports = router