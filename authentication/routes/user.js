const userRouter = require('express').Router();
const {userController} = require('../controllers');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);

userRouter.get('/', userController.getAllUser);
userRouter.get('/detail/:id', userController.getUserById);
userRouter.post('/create', userController.create);
userRouter.delete('/delete/:id', userController.delete);
userRouter.put('/update/:id', userController.update);

userRouter.get("/search", userController.search);

module.exports = userRouter;