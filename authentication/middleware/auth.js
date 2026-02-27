const { verifyToken } = require('../helpers/jwt');
const { Todo } = require('../models');

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

const authorization = async (req, res, next) => {
    try{
        const { id } = req.params;
        const userId = req.userData.id;

        const todo = await Todo.findByPk(+id);
        const todoFound = todo.dataValues
        if (!todoFound) {
           res.status(404).json({ message: 'Todo not found - Authorization' });
        }
        if (todo.UserId !== userId) {
            res.status(403).json({ message: 'Forbidden - You do not have access to this resource' });
        }
        next();
    }catch(error) {
        next(error);
    }
};
module.exports = {authentication, authorization};