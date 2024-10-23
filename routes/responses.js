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

// GET /responses/:poll_id
router.get('/:poll_id', (req, res) => {
  const responseId = req.params.id;
  responseQueries.getResponseById(responseId)
  .then((response) => {
    res.render('responses/:poll_id', response)
  });
});

// POST /responses/submit_responses
router.post('/submit_responses', (req, res) => {
  console.log("Inside the submit: ",req.body);
  const respondentId = req.body.respondent_id;
  const pollId = req.body.poll_id;
  const choice1 = req.body.choices[0];
  const choice2 = req.body.choices[1];
  const choice3 = req.body.choices[2];
  responseQueries.submitResponse(respondentId, pollId, choice1, choice2, choice3)
  .then((resopnse) => {
    res.json(resopnse);
  });
});

module.exports = router;
