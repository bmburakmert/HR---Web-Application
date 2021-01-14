module.exports = app => {
  const positions = require('../controllers/position.controller.js');

  const router = require('express').Router();

  // Create a new Tutorial
  router.post('/', positions.create);

  // Retrieve all users
  router.get('/', positions.findAll);

  // Retrieve all vacant positions
  router.get('/vacant', positions.findAllVacant);

// Retrieve all employee users
router.get('/employee', positions.findAllEmployee);


  // Retrieve a single Tutorial with id
  //router.get('/:id', positions.findOne);

  // Update a Position with id
  // router.put('/:id', users.update);

  // Delete a Tutorial with id
  // router.delete('/:id', users.delete);

  // Create a new Tutorial
  // router.delete('/', users.deleteAll);

  app.use('/api/positions', router);
};

