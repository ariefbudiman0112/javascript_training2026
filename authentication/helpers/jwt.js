const jwt  = require('jsonwebtoken');
const secretKey = 'love'; // Ganti dengan secret key yang lebih aman

const generateToken = (user) => {
    const { id, email, username } = user;
    const accessToken = jwt.sign({
         id, email, username 
        }, secretKey, { 
            expiresIn: '1h' 
        });
    return accessToken;
};

const verifyToken = (token) => {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
};

module.exports = {
    generateToken,
    verifyToken
};
