const fs = require('fs');

class todoService {
    static getAllTodo() {
        const data = fs.readFileSync('./data/data.json', 'utf-8');
        return JSON.parse(data);
    } 
    static getById(id) {
        const data = fs.readFileSync('./data/data.json', 'utf-8');
        const todos = JSON.parse(data);
        return todos.find(todo => todo.id === id);
    }
}

module.exports = todoService;