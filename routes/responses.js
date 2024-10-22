/*
 * All routes for Responses are defined here
 * Since this file is loaded in server.js into /responses,
 *   these routes are mounted onto /responses
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const responseQueries = require('../db/queries/responses');

// GET /responses
router.get('/', (req, res) => {
  responseQueries.getResponses()
  .then((responses) => {
    res.render('responses.ejs', { responses });
  });
});

// GET /responses/:id
router.get('/:id', (req, res) => {
  const responseId = req.params.id;
  responseQueries.getResponseById(responseId)
  .then((response) => {
    res.render('responses/:id', response)
  });
});

// POST /responses/submit_responses
router.post('/submit_responses', (req, res) => {
  const respondentId = req.body.respondent_id;
  const choiceId = req.body.choice_id;
  const ranking = req.body.ranking;
  responseQueries.submitResponses(respondentId, choiceId, ranking)
  .then((resopnse) => {
    res.render('responses/submit_responses', { resopnse })
  });
});

module.exports = router;
