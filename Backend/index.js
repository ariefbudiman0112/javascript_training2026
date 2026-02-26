const command = process.argv[2];
const params = process.argv.slice(3);
const TodoControllers = require("./controllers/TodoControllers");

switch(command){
    case "help":
        TodoControllers.help();
        break;
    case "list":
        TodoControllers.list();
        break;
    case "add":
        TodoControllers.add(params);
        break;
    case "update":
        TodoControllers.update(params);
        break;
    case "delete":
        TodoControllers.delete(params);
        break;
    case "complete":
        TodoControllers.message("Menu complete");
        break;
    case "uncomplete":
        TodoControllers.message("Menu uncomplete");
        break;
    default:
        command
            ? TodoControllers.message(`Invalid command: ${command}`)
            : TodoControllers.help("Menu help");
}