/*
 * All routes for Polls are defined here
 * Since this file is loaded in server.js into /polls,
 *   these routes are mounted onto /polls
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const pollQueries = require('../db/queries/polls');
const helpers = require('./helpers');
const { sendEmail } = require('../mailgun');

// GET /polls
router.get('/', (req, res) => {
  pollQueries.getPolls()
  .then((polls) => {
    res.render('polls',{ polls });
  });
});

// GET /polls/:id
router.get('/:id', (req, res) => {
  const pollId = req.params.id;
  const userEmail = 'cporfnqi@sharklasers.com';
  console.log("Poll By ID: ",pollQueries.getPollById(pollId))
  pollQueries.getPollById(pollId)
  .then((poll) => {
    console.log("poll: ",poll);
  const pollQuestion = poll.question;
  const creatorLink = poll.creator_link;
  const pollLink = poll.poll_link;
  const title1 = poll.title1;
  const description1 = poll.description1;
  const title2 = poll.title2;
  const description2 = poll.description2;
  const title3 = poll.title3;
  const description3 = poll.description3;
  const templateVars = {
    pollId: pollId,
    pollQuestion: pollQuestion,
    creatorLink: creatorLink,
    pollLink: pollLink,
    titles: [title1, title2, title3],
    descriptions: [description1, description2, description3],
    mailgunemail:userEmail
  };
    res.render('users', templateVars);
  });
});

// GET /polls/creators
router.get('/creators', (req, res) => {
  const creatorId = req.params.id;
  pollQueries.getPollsByCreator(creatorId)
  .then((creator) => {
    res.render('polls/creators', creator)
  });
});

// POST /polls/create_poll
router.post('/create_poll', (req, res) => {
  const userEmail = req.body.email;
  console.log("UserEmail: ",userEmail);
  const pollQuestion = req.body.question;
  const creatorLink = helpers.randomUrlGenerator();
  const pollLink = helpers.randomUrlGenerator();
  const title1 = req.body.titles[0];
  const description1 = req.body.descriptions[0];
  const title2 = req.body.titles[1];
  const description2 = req.body.descriptions[1];
  const title3 = req.body.titles[2];
  const description3 = req.body.descriptions[2];

  pollQueries.submitPollQuestion(pollQuestion, creatorLink, pollLink, title1, description1, title2, description2, title3, description3)
  .then((poll) => {
    const templateVars = {
      pollId: poll.id,
      pollQuestion: poll.question,
      creatorLink: poll.creator_link,
      pollLink: poll.poll_link,
      titles: [poll.title1, poll.title2, poll.title3],
      descriptions: [poll.description1, poll.description2, poll.description3],
      mailgunemail:userEmail
    }
    sendEmail(userEmail,true,poll.id);
    res.render('users', templateVars);
  });
});

module.exports = router;
