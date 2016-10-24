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

router.get('/:id', function (req, res, next) {
  const id = req.params.id;

  return knex('coffee')
  .where('id', id)
  .then(coffee => {
    res.status(200).json({
      status: 'success',
      data: coffee
    });
  })
  .catch(err => next(err));
});

module.exports = router;
