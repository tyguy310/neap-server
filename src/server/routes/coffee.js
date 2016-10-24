const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/', function (req, res, next) {
  return knex('coffee')
  .then(coffees => {
    res.status(200).json({
      status: 'success',
      data: coffees
    });
  })
  .catch(err => next(err));
});

module.exports = router;
