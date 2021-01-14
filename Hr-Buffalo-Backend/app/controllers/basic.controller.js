const db = require('../models');

const Basic = db.basics;

exports.create = (req, res) => { 
  // Validate if user is exist
  if (!req.body.firstName) {
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }

// Create a User
  const basic = new Basic({
    salutation: req.body.salutation,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    office: req.body.office || "",
    phoneExtension: req.body.phoneExtension || "",
    roomNumber: req.body.roomNumber || "",
    personalEmail: req.body.personalEmail,
    cellPhone: req.body.cellPhone,
    position: req.body.position || "",
    homeAdress: req.body.homeAdress || "",
    imageUrl: req.body.imageUrl || "",
    status: req.body.status || true,
    is_suspended: req.body.is_suspended,
    user: req.params.userId
  });

  // Save User Basics in the database
  basic.save(basic)
    .then(data => {
        res.send(data);
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

  Basic.findById(id).populate('user')
      .then(data => {
          if (!data) res.status(404).send({ message: `Not found Tutorial with id ${id}` });
          else res.send(data);
      })
      .catch(err => {
          res.status(500).send({ message: `Error retrieving Tutorial with id=${id}` });
      });
};