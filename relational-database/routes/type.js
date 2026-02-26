const typeRouter = require('express').Router();
const {typeController} = require('../controllers');


typeRouter.get('/', typeController.getAllTypes);
typeRouter.get('/detail/:id', typeController.getTypeById);
typeRouter.post('/create', typeController.create);
typeRouter.delete('/delete/:id', typeController.delete);
typeRouter.put('/update/:id', typeController.update);

typeRouter.get("/search", typeController.search);

module.exports = typeRouter;