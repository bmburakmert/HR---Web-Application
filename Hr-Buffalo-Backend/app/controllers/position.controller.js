const db = require('../models');
const Position = db.positions;

exports.create = (req, res) => {
    // Create a Position
    const position = new Position({
        title: req.body.title,
        roomNumber: req.body.roomNumber || null,
        phoneExtension: req.body.phoneExtension || null,
        role: req.body.role,
        isSupervisor: req.body.isSupervisor,
        isPosted: req.body.isPosted,
        positionType: req.body.positionType,
        location: req.body.location,
        reportsTo: req.body.reportsTo || null,
        assignedStaff: req.body.assignedStaff || null,
        notes: req.body.notes || null,
    });

    // Save position in the database
    position.save(position)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || 'Some error occurred while creating the position.',
        });
    });
};

exports.findAllVacant = (req, res) => {
    Position.find({ assignedStaff: null })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials.',
            });
        });
  };

exports.findAllEmployee = (req, res) => {
  Position.find({ assignedStaff: { $ne: null }}).populate({ 
    path: 'assignedStaff',
    populate: {
      path: 'identity',
      model: 'Identity',
    }
 }).populate({ 
    path: 'assignedStaff',
    populate: {
      path: 'contactProfile',
      model: 'ContactProfile'
    } 
 }).populate('location')
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || 'Some error occurred while retrieving tutorials.',
          });
      });
};


exports.findAll = (req, res) => {
    const { assignedStaff } = req.query;
    const condition = assignedStaff ? { assignedStaff: { $regex: new RegExp(assignedStaff), $options: 'i' } } : {};
  
    Position.find(condition).populate('assignedStaff').populate('positionType')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving tutorials.',
            });
        });
  };

