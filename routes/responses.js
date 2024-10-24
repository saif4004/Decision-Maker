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
const {sendEmail} = require('../mailgun.js');

// GET /responses
router.get('/', (req, res) => {
  responseQueries.getResponses()
  .then((responses) => {
    res.render('responses.ejs', { responses });
  });
});


// GET /responses/:poll_id
router.get('/:poll_id', (req, res) => {
  const responseId = req.params.poll_id;
  responseQueries.getResponsesByPollId(responseId)
  .then((response) => {
    if (!response || response.length === 0) {
      return res.render('results', {
        choices: ["No options available"],
        count: [0, 0, 0],
        tie: false
      });
    }
    const pollWinner = helpers.bordaCount(response);
    console.log("pollWinner",pollWinner);
    if(pollWinner[3]) {
      // message there was a tie cause mail gun sucks
      let string1 = pollWinner[0].choice1;
      let string2 = pollWinner[1].choice2;
      let string3 = pollWinner[2].choice3;

      let countChoice1 = pollWinner[0].votes;
      let countChoice2 = pollWinner[1].votes;
      let countChoice3 = pollWinner[2].votes;

      const templateVars = {
        choices: [string1,string2,string3],
        count: [countChoice1,countChoice2,countChoice3],
        tie: true
      };
      // console.log("TEMPLATE: ",templateVars);
      return res.render('results',templateVars);
    }
    // console.log("PollWinner: ",pollWinner);
    let string1 = pollWinner[0].winner;
    let string2 = pollWinner[1].choice2;
    let string3 = pollWinner[2].choice3;

    let countChoice1 = pollWinner[0].votes;
    let countChoice2 = pollWinner[1].votes;
    let countChoice3 = pollWinner[2].votes;

    const templateVars = {
      choices: [string1,string2,string3],
      count: [countChoice1,countChoice2,countChoice3],
      tie: false
    };
    // console.log("TEMPLATE: ",templateVars);
    res.render('results',templateVars);
  });
});

// POST /responses/submit_responses
router.post('/submit_responses', (req, res) => {
  const respondentId = req.body.respondent_id;
  const userEmail = req.body.email;
  sendEmail(userEmail,false);
  const pollId = req.body.pollId;
  let choice1 = req.body.votes[0].option;
  let choice2 = req.body.votes[1].option;
  let choice3 = req.body.votes[2].option;
  let choiceArray = req.body.votes;

  for (const index of choiceArray) {
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
      poll: true,
      mailgunemail: userEmail
    }
    res.render('users',templateVars);
    });
  });
});

module.exports = router;
