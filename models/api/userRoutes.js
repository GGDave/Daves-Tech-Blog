const router = require('express').Router();
const {User, Post} = require('../../models');

// Get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: {
      exclude: ['password']
    }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});