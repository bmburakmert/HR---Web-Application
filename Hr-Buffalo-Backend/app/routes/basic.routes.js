module.exports = app => {
    const basics = require('../controllers/basic.controller.js');

    const router = require('express').Router();

    // Create a new Tutorial
    router.post('/', basics.create);

    // Retrieve all users
    // router.get('/', users.findAll);

    // Retrieve all published users
    // router.get('/published', users.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get('/:id', basics.findOne);

    // Update a Tutorial with id
    // router.put('/:id', users.update);

    // Delete a Tutorial with id
    // router.delete('/:id', users.delete);

    // Create a new Tutorial
    // router.delete('/', users.deleteAll);

    app.use('/api/users/basics', router);
};
