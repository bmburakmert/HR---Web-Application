const db = require('../models');
const PositionType = db.positionTypes;
const BudgetCode = db.budgetCodes;
const StateCode = db.stateCodes;

exports.findAll = (req, res) => {
    PositionType.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving position types.',
            });
        });
};

exports.create = (req, res) => {
    // Create a positionn type
    const positionType = new PositionType({
        name: req.body.name,
        description: req.body.description,
        stateCode: req.body.stateCode,
        budgetCode: req.body.budgetCode
    });

    // Save a positionn type
    positionType.save(positionType)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || 'Some error occurred while creating the position type.',
        });
    });
};

exports.findAllBudgetCodes = (req, res) => {
    BudgetCode.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving budget codes.',
            });
        });
};

exports.createBudgetCodes = (req, res) => {
    // Create a budget code
    const budgetCode = new BudgetCode({
        name: req.body.name,
        description: req.body.description
    });

    // Save budget code in the database
    budgetCode.save(budgetCode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || 'Some error occurred while creating the budget code.',
        });
    });
};

exports.findAllStateCodes = (req, res) => {
    StateCode.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving state codes.',
            });
        });
};

exports.createStateCodes = (req, res) => {
    // Create a state code
    const stateCode = new StateCode({
        name: req.body.name,
        description: req.body.description
    });

    // Save state code in the database
    stateCode.save(stateCode)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || 'Some error occurred while creating the budget code.',
        });
    });
};
