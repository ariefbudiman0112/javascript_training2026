const { Op } = require('sequelize');
const { Todo } = require('../models');

class todoService {
    static async getAllTodo() {
        return Todo.findAll({
            order: [['id', 'ASC']],
            include: ['User', 'Type'],
        });
    } 

    static async createTodo(data) {
        return Todo.create(data);
    }

    static async getById(id) {
        return Todo.findByPk(id);
    }

    static async delete(id) {
        return Todo.destroy({ where: { id } });
    }

    static async update(id, data) {
        return Todo.update(data, { where: { id } });
    }

    static async search(keyword) {
        const condition = keyword 
            ? { 
                task: { 
                    [Op.iLike]: `%${keyword}%` 
                },
            } 
            : {};
        return Todo.findAll({ 
            where: condition 
        });
    }
}

module.exports = todoService;