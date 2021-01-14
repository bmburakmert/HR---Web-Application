  const db = require('../models');

  const Address = db.addresses;

      exports.create = (req, res) => { 
      // Validate if user is exist
      if (!req.body.addressLine1) {
          res.status(400).send({message: "Content can not be empty!"});
          return;
      }
      const address = new Address(
          {
          addressLine1: req.body.addressLine1,
          addressLine2: req.body.addressLine2,
          city: req.body.city,
          state: req.body.state,
          zipCode: req.body.zipCode,
          phone: req.body.phone
          }
      );
      // Save Address in the database
      address.save(address)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
          message: err.message || 'Some error occurred while creating the Address.',
      });
      });
      // Retrieve all Addresss from the database.
      exports.findAll = (req, res) => {
      const { title } = req.query;
      const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};
      Address.find(condition)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || 'Some error occurred while retrieving Address.',
          });
      });
      }
      // Find a single ADdress with an id
      exports.findOne = (req, res) => {
      const { id } = req.params;

      Address.findById(id)
          .then(data => {
              if (!data) res.status(404).send({ message: `Not found Address with id ${id}` });
              else res.send(data);
          })
          .catch(err => {
              res.status(500).send({ message: `Error retrieving Address with id=${id}` });
          });
      };
    

      // Address.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      //     .then(data => {
      //         if (!data) {
      //             res.status(404).send({
      //                 message: `Cannot update Address with id=${id}. Maybe Address was not found!`,
      //             });
      //         } else res.send({ message: 'Address was updated successfully.' });
      //     })
      //     .catch(err => {
      //         res.status(500).send({
      //             message: `Error updating Address with id=${id}`,
      //         });
      //     });
      // };