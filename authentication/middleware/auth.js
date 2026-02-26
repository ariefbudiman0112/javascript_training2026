const { verifyToken } = require('../helpers/jwt');

const authentication = (req, res, next) => {
    try{
        console.log('Auth middleware called');
        const {access_token} = req.headers;
        const userVerified = verifyToken(access_token);
        req.userData = userVerified;
        next();
    }catch(error) {
        res.status(401).json({ message: 'Unauthorized', error });
    }
};

module.exports = {authentication};