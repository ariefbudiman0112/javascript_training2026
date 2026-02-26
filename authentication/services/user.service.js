const { Op } = require('sequelize');
const { User } = require('../models');
const { encryptPwd } = require('../helpers/bycrypt');

class userService {
    static async getAllUser() {
        return User.findAll({
            order: [['id', 'ASC']]
        });
    } 

    static async createUser(data) {
        const { username, email, password } = data;
        const encryptedPassword = encryptPwd(password);
        
        return User.create({ username, email, password: encryptedPassword });
    }

    static async getById(id) {
        return User.findByPk(id);
    }

    static async delete(id) {
        return User.destroy({ where: { id } });
    }

    static async update(id, data) {
        return User.update(data, { where: { id } });
    }

    static async search(keyword) {
        const condition = keyword 
            ? { 
                email: { 
                    [Op.iLike]: `%${keyword}%` 
                },
            } 
            : {};
        return User.findAll({ 
            where: condition 
        });
    }

    static async login(email) {
        return User.findOne({ where: { email } });
    }

    static async register(userData) {
        return User.create(userData);
    }
}

module.exports = userService;