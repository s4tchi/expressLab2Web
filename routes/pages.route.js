const {Router} = require('express');

const router = Router();

router.get('/auth', async (req, res) => {
    try {
        res.sendFile(__dirname + '/templates/registrationPage.html')
    }
    catch (e) {
        res.json({error: true, message: e})
    }
})

module.exports = router