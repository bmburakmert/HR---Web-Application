const db = require('../models');

const Detail = db.details;

exports.create = (req, res) => { 
  // Validate if user is exist
  if (!req.body.firstName) {
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }

// Create a User
  const detail = new Detail({
      hireDate: req.body.hireDate || "",
			contractWorkDays: req.body.contractWorkDays || "",
			employmentBasis: req.body.employmentBasis || "",
      educationLevel: req.body.educationLevel || "",
      contractWorkMonths: req.body.contractWorkMonths,
      teachingExperience: req.body.teachingExperience || "",
      birthDate: req.body.birthDate || "",
      gender: req.body.gender || "",
      nativeLanguage: req.body.nativeLanguage || "",
      secondaryLanguage: req.body.secondaryLanguage || "",
      placeOfBirth: req.body.placeOfBirth || "",
      countryOfOrigin: req.body.countryOfOrigin || "",
      isHispanic: req.body.isHispanic,  
      race: req.body.race || "",
      user: req.params.userId
  });

  // Save User Basics in the database
  detail.save(detail)
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

  Detail.findById(id).populate('user')
      .then(data => {
          if (!data) res.status(404).send({ message: `Not found Details Data with id ${id}` });
          else res.send(data);
      })
      .catch(err => {
          res.status(500).send({ message: `Error retrieving Details Data with id=${id}` });
      });
};