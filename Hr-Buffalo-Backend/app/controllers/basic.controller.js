const db = require('../models');

const Basic = db.basics;

exports.create = (req, res) => { 
  // Validate if user is exist
  // ...

  // Create a Tutorial
  const basic = new Basic({
    salutation: req.body.salutation,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    phone_extension: req.body.phone_extension,
    room_number: req.body.room_number,
    personal_email: req.body.personal_email,
    cell_phone: req.body.cell_phone,
    image_url: req.body.image_url,
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
        message: err.message || 'Some error occurred while creating the Tutorial.',
      });
    });

}

// Find a single Tutorial with an id
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