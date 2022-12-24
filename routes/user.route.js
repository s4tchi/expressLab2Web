const {Router} = require('express');
const { getUserByEmailWithStates } = require('../proxy/user.proxy')

const router = Router();

router.get('', async (req, res) => {
    try {
        console.log(req.query.email)
        const user = await getUserByEmailWithStates(req.query.email)
        console.log(user)
        res.status(200).json({user})
    }
    catch (e) {
        res.status(500).json({message: e})
    }
})

module.exports = router