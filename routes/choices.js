/*
 * All routes for Choices are defined here
 * Since this file is loaded in server.js into /choices,
 *   these routes are mounted onto /choices
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const choiceQueries = require('../db/queries/choices');

// GET /choices
router.get('/', (req, res) => {
  choiceQueries.getChoices()
  .then((choices) => {
    res.render('choices', { choices });
  });
});

// GET /choices/:id
router.get('/:id', (req, res) => {
  const choiceId = req.params.id;
  choiceQueries.getChoiceById(choiceId)
  .then((choice) => {
    res.render('choices/:id', choice)
  });
});

// POST /choices/create_choices (implement into submitPoll)
router.post('choices/create_choices', (req, res) => {
  const title1 = req.body.title_1;
  const description1 = req.body.description1;
  const title2 = req.body.title_2;
  const description2 = req.body.description2;
  const title3 = req.body.title_3;
  const description3 = req.body.description3;
  choiceQueries.submitChoices(title1, description1, title2, description2, title3, description3)
  .then((choices) => {
    res.render('choices/create_choices', { choices })
  });
});

module.exports = router;
