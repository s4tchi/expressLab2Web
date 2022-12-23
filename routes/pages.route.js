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

router.get('/gallery', async (req, res) => {
    try {
        res.sendFile(__dirname + '/templates/galleryPage.html')
    }
    catch (e) {
        res.json({error: true, message: e})
    }
})

router.get('/', async (req, res) => {
    try {
        res.sendFile(__dirname + '/templates/landingPage.html')
    }
    catch (e) {
        res.json({error: true, message: e})
    }
})

router.get('/profile', async (req, res) => {
    try {
        res.sendFile(__dirname + '/templates/profilePage.html')
    }
    catch (e) {
        res.json({error: true, message: e})
    }
})

router.get('/state', async (req, res) => {
    try {
        res.sendFile(__dirname + '/templates/statePage.html')
    }
    catch (e) {
        res.json({error: true, message: e})
    }
})

module.exports = router