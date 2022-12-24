const {Router} = require('express');
const { getStateByAutor, getStateById, createState } = require('../proxy/state.proxy')

const router = Router();

router.get('', async (req, res) => {
    try {
        const states = await getStateByAutor(req.query.email)
        res.status(200).json({states})
    }
    catch(e) {
        res.status(500).json({message: e})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const state = await getStateById(req.params['id'])
        res.status(200).json({state})
    }
    catch(e) {
        res.status(500).json({message: e})
    }
})

router.post('', async (req, res) => {
    try {
        const {name, text, private, authorEmail} = req.body
        await createState(name, text, authorEmail, private)
        res.status(200).json({message: 'All OK'})
    }
    catch(e) {
        res.status(500).json({message: e})
    }
})

module.exports = router