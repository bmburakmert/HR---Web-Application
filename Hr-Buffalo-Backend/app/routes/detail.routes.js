module.exports = app => {
    const details = require('../controllers/detail.controller.js');

    const router = require('express').Router();

    // Create a new User
    router.post('/', details.create);

    // Retrieve all details
    router.get('/', details.findAll);

    // Retrieve all published details
    // router.get('/published', details.findAllPublished);

    // Retrieve a single User with id
    router.get('/:id', details.findOne);

    // Retrieve a single User with Basics
    router.get('/:id/details', users.findOneWithDetails);

    // Update a User with id
    // router.put('/:id', details.update);

    // Delete a User with id
    // router.delete('/:id', details.delete);

    // Create a new User
    // router.delete('/', details.deleteAll);

    app.use('/api/users/details', router);
};
