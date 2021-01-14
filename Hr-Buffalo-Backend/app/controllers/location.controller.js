const db = require('../models');
const Location = db.locations;

exports.findAll = (req, res) => {
  Location.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving locations.',
        });
    });
};

exports.create = (req, res) => {
  // Create a positionn type
  const location = new Location({
    name: req.body.name,
    description: req.body.description,
    code: req.body.code,
    schoolYear: req.body.schoolYear,
    address: req.body.address,
    districtCode: req.body.districtCode,
  });

  // Save a positionn type
  location.save(location)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
          message: err.message || 'Some error occurred while creating the location.',
      });
  });
};