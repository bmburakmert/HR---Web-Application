const db = require('../models');

const User = db.users;
const Basic = db.basics;

exports.create = (req, res) => { 
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({ message: 'User name can not be emptyy!' });
    return;
  }
  
  const createUser = function(name, role, basic) {
    const user = new User({
      name,
      role,
      basic
    });
  
    return user.save();
  };

  const basic = new Basic({
    salutation: req.body.salutation,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    phoneExtension: req.body.phoneExtension || null,
    roomNumber: req.body.roomNumber || null,
    personalEmail: req.body.personalEmail,
    cellPhone: req.body.cellPhone,
    imageUrl: req.body.imageUrl || null,
    isSuspended: false,
  });

  basic.save(basic)
    .then(basic => {
      let fullName = req.body.firstName + ' ' + req.body.middleName + ' ' + req.body.lastName;
      createUser(fullName, 'staff',  basic.id);
      res.send(basic);
    })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      });
    });

  

}

// Find a single User with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(data => {
        if (!data) res.status(404).send({ message: `Not found User with id ${id}` });
        else res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: `Error retrieving User with id=${id}` });
    });
};

// Find a single User with basics info
exports.findOneWithBasics = (req, res) => {
  const { id } = req.params;

  User.findById(id).populate('basic')
    .then(data => {
        if (!data) res.status(404).send({ message: `Not found User with id ${id}` });
        else res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: `Error retrieving User with id=${id}` });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const { name } = req.query;
  const condition = name ? { name: { $regex: new RegExp(name), $options: 'i' } } : {};

  User.find(condition).populate('basic')
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.',
          });
      });
};
