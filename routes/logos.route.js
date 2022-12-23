const {Router} = require('express');

const router = Router();

router.get('/:fileName', async (req, res) => {
    try {
        console.log(req.params['fileName'])
        res.sendFile(__dirname + `/templates/img/${req.params['fileName']}`)
    }
    catch (e) {
        res.json({error: true, message: req.params['fileName']})
    }
})

module.exports = router