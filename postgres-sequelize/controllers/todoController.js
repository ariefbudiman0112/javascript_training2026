const { todoService } = require('../services');

class todoController {
    static async getAllTodo(req, res) {
        try {
            const todos = await todoService.getAllTodo();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching todos', error });
        }
    }
    static async getTodoById(req, res) {
        try {
            const id = +req.params.id;
            const todo = await todoService.getById(id);
            if (!todo) {
                res.status(404).json({ message: 'Todo not found' });
                return;
            }
            res.json(todo);
        } catch (error) {
            res.status(404).json({ message: 'Todo not found' });
        }
    }
    static async create(req, res) {
        try {
            const todoData = req.body;
            const todo = await todoService.createTodo(todoData);
            res.status(200).json(todo);
        } catch (error) {
            res.status(500).json({ message: 'Error creating todo', error });
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const deleted = await todoService.delete(id);
            if (deleted) {
                res.status(200).json({ message: 'Todo deleted successfully' });
            }else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting todo', error });
        }
    }
    static async update(req, res) {
        try {
            const id = +req.params.id;
            const data = req.body;
            const updated = await todoService.update(id, data);
            if (updated) {
                res.status(200).json({ message: 'Todo updated successfully' });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating todo', error });
        }
    }
    static async search(req, res) {
        try {
            const { task } = req.query;
            const todos = await todoService.search(task);
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: 'Error searching todos', error });
        }
    }
}

module.exports = todoController;