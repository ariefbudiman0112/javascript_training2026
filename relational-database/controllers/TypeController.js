const { typeService } = require('../services');

class TypeController {
    static async getAllTypes(req, res) {
        try {
            const types = await typeService.getAllTypes();
            res.status(200).json(types);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching types', error });
        }
    }
    static async getTypeById(req, res) {
        try {
            const id = +req.params.id;
            const type = await typeService.getById(id);
            if (!type) {
                res.status(404).json({ message: 'Type not found' });
                return;
            }
            res.json(type);
        } catch (error) {
            res.status(404).json({ message: 'Type not found' });
        }
    }
    static async create(req, res) {
        try {
            const typeData = req.body;
            const type = await typeService.createType(typeData);
            res.status(200).json(type);
        } catch (error) {
            res.status(500).json({ message: 'Error creating type', error });
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const deleted = await typeService.delete(id);
            if (deleted) {
                res.status(200).json({ message: 'Type deleted successfully' });
            }else {
                res.status(404).json({ message: 'Type not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting type', error });
        }
    }
    static async update(req, res) {
        try {
            const id = +req.params.id;
            const data = req.body;
            const updated = await typeService.update(id, data);
            if (updated) {
                res.status(200).json({ message: 'Type updated successfully' });
            } else {
                res.status(404).json({ message: 'Type not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating type', error });
        }
    }
    static async search(req, res) {
        try {
            const { task } = req.query;
            const todos = await typeService.search(task);
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: 'Error searching types', error });
        }
    }
}

module.exports = TypeController;