const todoRouter = require('express').Router();
const {todoController} = require('../controllers');


todoRouter.get('/', todoController.getAllTodo);
todoRouter.get('/detail/:id', todoController.getTodoById);
todoRouter.post('/create', todoController.create);
todoRouter.delete('/delete/:id', todoController.delete);
todoRouter.put('/update/:id', todoController.update);

todoRouter.get("/search", todoController.search);

module.exports = todoRouter;