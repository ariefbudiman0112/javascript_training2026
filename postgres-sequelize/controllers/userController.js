const { userService } = require('../services');

class userController {
    static async getAllUser(req, res) {
        try {
            const users = await userService.getAllUser();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }
    static async getUserById(req, res) {
        try {
            const id = +req.params.id;
            const todo = await userService.getById(id);
            if (!todo) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(todo);
        } catch (error) {
            res.status(404).json({ message: 'User not found' });
        }
    }
    static async create(req, res) {
        try {
            const userData = req.body;
            const user = await userService.createUser(userData);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }
    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const deleted = await userService.delete(id);
            if (deleted) {
                res.status(200).json({ message: 'User deleted successfully' });
            }else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
    static async update(req, res) {
        try {
            const id = +req.params.id;
            const data = req.body;
            const updated = await userService.update(id, data);
            if (updated) {
                res.status(200).json({ message: 'User updated successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }
    static async search(req, res) {
        try {
            const { email } = req.query;
            const users = await userService.search(email);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error searching users', error });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userService.login(email, password);
            if (user) {
                res.status(200).json({ message: 'Login successful', user });
            } else {
                if(user.password !== password) {
                    res.status(401).json({ message: 'Invalid password' });
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async register(req, res) {
        try {            
            const { email, password } = req.body;
            const user = await userService.register({ email, password });
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error }); 
        }
    }
}

module.exports = userController;