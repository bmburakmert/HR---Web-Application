module.exports = app => {
  const positionTypes = require('../controllers/positionType.controller.js');

  const router = require('express').Router();

  // Retrieve all position types
  router.get('/', positionTypes.findAll);

  // Retrieve all position types
  router.post('/', positionTypes.create);

  // Retrieve all budget codes
  router.get('/budget-codes', positionTypes.findAllBudgetCodes);

  // Create a budget code
  router.post('/budget-codes', positionTypes.createBudgetCodes);

  // Retrieve all state codes
  router.get('/state-codes', positionTypes.findAllStateCodes);

  // Create bulk state codes
  router.post('/state-codes', positionTypes.createStateCodes);


  app.use('/api/positions/types', router);
};

