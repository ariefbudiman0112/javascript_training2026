const todoRouter = require('express').Router();
const {todoController} = require('../controllers');


todoRouter.get('/', todoController.getAllTodo);
todoRouter.get('/detail/:id', todoController.getTodoById);
todoRouter.get('/create', todoController.create);
todoRouter.delete('/delete', todoController.delete);
todoRouter.put('/update', todoController.update);

module.exports = todoRouter;