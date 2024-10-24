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
const helpers = require('./helpers')

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

    const pollWinner = helpers.bordaCount(response);
    let string1 = pollWinner[0].winner;
    let string2 = pollWinner[1].choice2;
    let string3 = pollWinner[2].choice3;

    let countChoice1 = pollWinner[0].votes;
    let countChoice2 = pollWinner[1].votes;
    let countChoice3 = pollWinner[2].votes;
    console.log(pollWinner);

    const templateVars = {
      choices: [string1,string2,string3],
      count: [countChoice1,countChoice2,countChoice3]
    };
    // console.log("TEMPLATE: ",templateVars);
    res.render('results',templateVars);
  });
});

// POST /responses/submit_responses
router.post('/submit_responses', (req, res) => {
  const respondentId = req.body.respondent_id;
  const pollId = req.body.pollId;
  let choice1 = req.body.votes[0].option;
  let choice2 = req.body.votes[1].option;
  let choice3 = req.body.votes[2].option;
  // console.log("req.body: ",req.body.votes[0]);
  let choiceArray = req.body.votes;
  console.log("choiceArray: ",choiceArray);

  for (const index of choiceArray) {
    // console.log("index: ",index.option);
    if(parseInt(index.rank) === 1) {
      choice1 = index.option;
    }
    if(parseInt(index.rank)=== 2) {
      choice2 = index.option;
    }
    if(parseInt(index.rank) === 3) {
      choice3 = index.option;
    }
  }
  console.log("choice1: ",choice1);
  console.log("choice2: ",choice2);
  console.log("choice3: ",choice3);

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
