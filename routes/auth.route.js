const User = require('../models/user.model'); 
const jwt = require('jsonwebtoken');
const {Router} = require('express');

const router = Router();

router.post('/register', async(req, res) => {
    try{
        const {login, password, email, favorite} = req.body;
        const candidate = await User.findOne({email});

        if(candidate){
            return res.status(400).json({message: "Пользователь с таким логином существует!!!"});
        }

        const user = new User({name: login, password, favorite, email});
        await user.save();

        res.status(200).json({message: "Пользователь зарегистрирован"});
    }
    catch(e){
        res.status(500).json({message: e.message});
    }
});

router.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body;
        const candidate = await User.findOne({email});

        if(!candidate) return res.status(400).json({message: "Неверный логин или пароль"});
        if(candidate.password != password) return res.status(400).json({message: "Неверный логин или пароль"});

        const token = jwt.sign({userId: candidate.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        candidate.password = null

        res.json({token, candidate});
    }
    catch(e){
        console.log(e.message)
        res.status(500).json({message: "Что-то пошло не так((("});
    }
});


module.exports = router;