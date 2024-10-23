/*
 * All routes for Responses are defined here
 * Since this file is loaded in server.js into /responses,
 *   these routes are mounted onto /responses
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const responseQueries = require('../db/queries/responses');
const pollsQueries = require('../db/queries/polls');

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
  const pollId = req.body.pollId;
  const choice1 = req.body.votes[0].option;
  const choice2 = req.body.votes[1].option;
  const choice3 = req.body.votes[2].option;
  responseQueries.submitResponse(respondentId, pollId, choice1, choice2, choice3)
  .then(() => {
    pollsQueries.getPollById(pollId).then(poll => {
    console.log("Poll by id: ",poll);
    const templateVars = {
      pollId: poll.id,
      pollQuestion: poll.question,
      creatorLink: poll.creator_link,
      pollLink: poll.poll_link,
      titles: [poll.title1, poll.title2, poll.title3],
      descriptions: [poll.description1, poll.description2, poll.description3]
    }
    res.render('users',templateVars);
    });
  });
});

module.exports = router;
