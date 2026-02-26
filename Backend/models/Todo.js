const fs = require("fs");

class Todo {
    constructor(id, task, status){
        this.id = id || "";
        this.task = task || "";
        this.status = status || false;
    }

    static getAllTodos(){
        const todos = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
        const data = todos.map((todo) => {
            const {id, task, status} = todo; 
            return new Todo(id, task, status);
        });
        return data;
    }

    static addTodo(params){
        const task = params[0];
        const todos = this.getAllTodos();
        let id;
        let status = false;
        if(todos.length === 0){
            id = 1;
        } else {
            id = todos[todos.length - 1].id + 1;
        }
        todos.push(new Todo(id, task, status));
        this.saveTodos(todos);
        return `Task "${task}" added successfully.`;
    }

    static deleteTodo(params){
        const id =+ params[0];
        const todos = this.getAllTodos();
        const filteredTodos = todos.filter(todo => todo.id !== id);
        this.saveTodos(filteredTodos);

        return `Task "${id}" deleted successfully.`;
    }

    static updateTodo(params){
        const id =+ params[0];
        const newTask = params[1];
        const todos = this.getAllTodos();
        const updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.task = newTask || todo.task;
            }
            return todo;
        });
        this.saveTodos(updatedTodos);

        return `Task "${id}" updated successfully.`;
    }

    static saveTodos(todos){
        let todosString = JSON.stringify(todos, null, 2);
        fs.writeFileSync("./data.json", todosString);
    }
    
}   


module.exports = Todo;