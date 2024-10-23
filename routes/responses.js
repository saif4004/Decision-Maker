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


// GET /responses/:poll_id
router.get('/:poll_id', (req, res) => { // make users.ejs redirect you to polls by id from this
  const responseId = req.params.poll_id;
  responseQueries.getResponsesByPollId(responseId)
  .then((response) => {
    if (!response || response.length === 0) {
      return res.render('results', {
        choices: ["No options available"],
        count: [0, 0, 0]
      });
    }

    let countChoice1 = 0;
    let countChoice2 = 0;
    let countChoice3 = 0;

    let string1 = response[0].choice1;
    let string2 = response[0].choice2;
    let string3 = response[0].choice3;

    // counting for string1
    for (const index of response) {
      if(index.choice1 === string1) {
        countChoice1 += 2;
      }
      if (index.choice2 === string1) {
        countChoice1 += 1;
      }
    };

    // counting for string2
    for (const index of response) {
      if(index.choice1 === string2) {
        countChoice2 += 2;
      }
      if (index.choice2 === string2) {
        countChoice2 += 1;
      }
    };

    // counting for string3
    for (const index of response) {
      if(index.choice1 === string3) {
        countChoice3 += 2;
      }
      if (index.choice2 === string3) {
        countChoice3 += 1;
      }
    };

    // logic for selecting winning choice and returning goes here
    console.log("countChoice1",countChoice1);
    console.log("countChoice2",countChoice2);
    console.log("countChoice3",countChoice3);
    const templateVars = {
      choices: [string1,string2,string3],
      count: [countChoice1,countChoice2,countChoice3]
    };
    console.log(templateVars);
    res.render('results',templateVars);
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
    const templateVars = {
      pollId: poll.id,
      pollQuestion: poll.question,
      creatorLink: poll.creator_link,
      pollLink: poll.poll_link,
      titles: [poll.title1, poll.title2, poll.title3],
      descriptions: [poll.description1, poll.description2, poll.description3],
    }
    res.render('users',templateVars);
    });
  });
});

module.exports = router;
