const db = require('../models');

const User = db.users;
const Identity = db.identities;
const ContactProfile = db.contactProfiles;
const Position = db.positions;

exports.create = (req, res) => {
  
  const identity = new Identity({
    nickName: req.body.nickName || null,
    salutation: req.body.salutation || null,
    firstName: req.body.firstName || null,
    middleName: req.body.middleName || null,
    lastName: req.body.lastName || null,
    birthDate: req.body.birthDate || null,
    genderCode: req.body.genderCode || null,
    secondaryLanguage: req.body.secondaryLanguage || null,
    hispanicEtnicityIndicator: req.body.hispanicEtnicityIndicator || null,
    races: [],
    placeOfBirth: req.body.placeOfBirth || null,
    nativeLanguage: req.body.nativeLanguage || null,
    countryOfOrigin: req.body.countryOfOrigin || null,
    initialUsEntryDate: req.body.initialUsEntryDate || null,
    imageUrl: req.body.imageUrl || null
  });

  const contactProfile = new ContactProfile({
    emailAddress: req.body.emailPersonal,
    cellPhone: req.body.cellPhone     
  });

  identity.save(identity)
  contactProfile.save(contactProfile)
    .then(() => {
      const user = new User({
        name: req.body.firstName + ' ' + req.body.middleName + ' ' + req.body.lastName,
        email: null,
        emailVerifiedAt: null,
        password: null,
        position: req.body.position,
        lastLogin: null,
        lastIp: null,
        isActive: true,
        groups: null,
        identity: identity._id,
        staff: null,
        contactProfile: contactProfile._id,
        address: null,
        role: null, 
        documents: null,
      });
  
      return user.save(user);
    })
    .then(user => {
      Position.findByIdAndUpdate(req.body.position,{
        $set: { 
          "assignedStaff": user._id,
        }},
        { useFindAndModify: false, new: true}).then(data => {
          res.send(data);
        })
    })
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
  console.log(id);
  User.findById(id).populate('identity').populate('contactProfile')
  .populate({ 
    path: 'position',
    populate: {
      path: 'positionType',
      model: 'PositionType'  
    }
 }).populate({ 
  path: 'position',
  populate: {
    path: 'location',
    model: 'Location'
} 
}).then(data => {
        if (!data) res.status(404).send({ message: `Not found User with id ${id}` });
        else res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: `Error retrieving User with id=${id}` });
    });
};
  
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const { name } = req.query;
  const condition = name ? { name: { $regex: new RegExp(name), $options: 'i' } } : {};
  //
  User.find(condition).populate('identity').populate('contactProfile')
  .populate({ 
    path: 'position',
    populate: {
      path: 'positionType',
      model: 'PositionType'  
    }
 }).populate({ 
    path: 'position',
    populate: {
      path: 'location',
      model: 'Location'
    } 
 }).populate({ 
  path: 'position',
  populate: {
    path: 'assignedStaff',
    model: 'User'
  } 
})
  .then(data => {
    res.send(data);
})
.catch(err => {
    res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.',
    });
});
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
      return res.status(400).send({
          message: 'Data to update can not be empty!',
      });
}

const { id } = req.params;

  User.findByIdAndUpdate(id, {
  $set: { 
    "name": req.body.firstName+ " " +req.body.middleName+ " " +req.body.lastName,
  }},
  { useFindAndModify: false, new: true}).then(user => {
      Identity.findByIdAndUpdate(user.identity, {
      $set: { 
        "salutation": req.body.salutation,
        "firstName": req.body.firstName,
        "middleName": req.body.middleName,
        "lastName": req.body.lastName
         }},
  { useFindAndModify: false, new: true})
  .then(identity => {res.send(identity);})
    ContactProfile.findByIdAndUpdate(user.contactProfile, {
      $set: { 
        "emailAddress": req.body.emailPersonal,
        "cellPhone": req.body.cellPhone
         }},
  { useFindAndModify: false, new: true})
  .then(contactProfile => {res.send(contactProfile);})
    res.send(user);
})
// .then(data => {
//   console.log(data);
//       if (!data) {
//           res.status(404).send({
//               message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
//           });
//       } else res.send({ message: 'Tutorial was updated successfully.' });
//   })
  .catch(err => {
      res.status(500).send({
          message: `Error updating Tutorial with id=${id}`,
      });
  });
};


exports.updatePos = (req, res) => {
  if (!req.body) {
      return res.status(400).send({
          message: 'Data to update can not be empty!',
      });
}
const { id } = req.params;
Position.findOneAndUpdate({"title": req.body.position}, {"assignedStaff": req.body.user_id}, { useFindAndModify: false, new: true})
.then(position => 
  User.findByIdAndUpdate(req.body.user_id, {
    $set: { 
      "position": position.id,
    }},
    { useFindAndModify: false, new: true}).then(user =>  
  Position.findOneAndUpdate({"title": req.body.currentPosition}, {"assignedStaff": null}, { useFindAndModify: false, new: true})
    )).then(data => {
      res.send(data);
  })
    .catch(err => {
      res.status(500).send({
          message: `Error updating Tutorial with id=${id}`,
      });
  });
};


// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  User.findByIdAndRemove(id)
      .then(data => {
              if (!data) {
                  res.status(404).send({
                      message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
                  });
              } else {
                  res.send({
                      message: 'Tutorial was deleted successfully!',
                  });
              }
      }).then(user =>  
        Position.findOneAndUpdate({"title": req.body.currentPosition}, {"assignedStaff": null}, { useFindAndModify: false, new: true})
      ).then(data => {
        res.send(data);
    })
      .catch(err => {
          res.status(500).send({
              message: `Could not delete Tutorial with id=${id}`,
          });
      });
};