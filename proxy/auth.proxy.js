const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) 
            return res.sendStatus(403)
        console.log(user)
        req.userEmail = user.email
        next()
    })
}

module.exports = { verifyToken }