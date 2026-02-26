const { todoService } = require('../services');

class todoController {
    static getAllTodo(req, res) {
        res.json(todoService.getAllTodo());
    }
    static getTodoById(req, res) {
        try {
            const id = +req.params.id;
            const todo = todoService.getById(id);
            if (!todo) {
                throw new Error('Todo not found');
            }
            res.json(todo);
        } catch (error) {
            res.status(404).json({ message: 'Todo not found' });
        }
    }
    static create(req, res) {
        res.json({ message: 'Create Todo page!' });
    }
    static delete(req, res) {
        res.json({ message: 'Delete Todo page!' });
    }
    static update(req, res) {
        res.json({ message: 'Update Todo page! ' });
    }
}

module.exports = todoController;