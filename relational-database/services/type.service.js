const { Op } = require('sequelize');
const { Type } = require('../models');

class TypeService {
    static async getAllTypes() {
        return Type.findAll({
            order: [['id', 'ASC']]
        });
    } 

    static async createType(data) {
        return Type.create(data);
    }

    static async getById(id) {
        return Type.findByPk(id);
    }

    static async delete(id) {
        return Type.destroy({ where: { id } });
    }

    static async update(id, data) {
        return Type.update(data, { where: { id } });
    }

    static async search(keyword) {
        const condition = keyword 
            ? { 
                name: { 
                    [Op.iLike]: `%${keyword}%` 
                },
            } 
            : {};
        return Type.findAll({ 
            where: condition 
        });
    }
}

module.exports = TypeService;