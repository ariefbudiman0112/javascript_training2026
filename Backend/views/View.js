class View {
    static help(){
        console.log("node todo.js");
        console.log("node todo.js list");
        console.log("node todo.js add <task>");
        console.log("node todo.js update <id> <new task>");
        console.log("node todo.js delete <id>");
        console.log("node todo.js complete <id>");
        console.log("node todo.js uncomplete <id>");
    }

    static list(todos){
        console.log("Todo List:");
        todos.forEach(todo => {
            const {id, task, status} = todo;
            status 
                ? console.log(`${id}. [V] ${task}`) 
                : console.log(`${id}. [ ] ${task}`);
        });
    }
    static message(msg){
        console.log(msg);
    }
}

module.exports = View;