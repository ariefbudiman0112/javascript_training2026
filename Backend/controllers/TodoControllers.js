const View = require("../views/View");
const Todo = require("../models/Todo");

class TodoControllers {
    static help(){ 
        View.help();
    }
    static list(){
       View.list(Todo.getAllTodos());
    }
    static add(params){
        const result = Todo.addTodo(params);
        View.message(result);
    }
    static update(params){
        const result = Todo.updateTodo(params);
        View.message(result);
    }
    static delete(params){
        const result = Todo.deleteTodo(params);
        View.message(result);
    }
    static complete(){
        View.complete();
    }
    static uncomplete(){
        View.uncomplete();
    }
    static message(msg){
        console.log(msg);
    }
}

module.exports = TodoControllers;