const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(403).send('A token is required for authentication')
    }

    try{
        const decoded = jwt.verify(token, 'AEDs8kwcddfcdlLSAd873z2nP4l1')
        req.user = decoded
    } catch(err){
        return res.status(401).send('Invalid Token.')
    }

    return next();
}

module.exports = verifyToken;