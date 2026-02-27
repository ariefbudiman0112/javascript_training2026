const todoRouter = require('express').Router();
const {todoController} = require('../controllers');
const { authentication, authorization } = require('../middleware/auth');


todoRouter.get('/', todoController.getAllTodo);
todoRouter.get('/detail/:id', todoController.getTodoById);
todoRouter.post('/create', authentication, todoController.create);
todoRouter.delete(
    '/delete/:id',
     authentication, 
     authorization, 
     todoController.delete);
todoRouter.put(
    '/update/:id', 
    authentication, 
    authorization, 
    todoController.update);

todoRouter.get("/search", todoController.search);

module.exports = todoRouter;