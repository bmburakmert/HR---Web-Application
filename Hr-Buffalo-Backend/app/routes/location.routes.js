module.exports = app => {
  const location = require('../controllers/location.controller.js');

  const router = require('express').Router();

  // Retrieve all locations
  router.get('/', location.findAll);

  // Create a location
  router.post('/', location.create);

  app.use('/api/locations/', router);
};