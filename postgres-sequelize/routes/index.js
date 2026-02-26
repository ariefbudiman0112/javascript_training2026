const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'Homepage' });
});

const todoRouter = require('./todo');
router.use('/todos', todoRouter);    

const userRouter = require('./user');
router.use('/users', userRouter);

module.exports = router;