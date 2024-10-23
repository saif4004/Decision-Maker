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
  pollQueries.getPollById(pollId)
  .then((poll) => {
    res.render('polls', { polls: [poll] });
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
      descriptions: [poll.description1, poll.description2, poll.description3]
    }
    res.render('users', templateVars);
  });
});

module.exports = router;
