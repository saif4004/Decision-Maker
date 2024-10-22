/*
 * All routes for Polls are defined here
 * Since this file is loaded in server.js into /polls,
 *   these routes are mounted onto /polls
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const pollQueries = require('../db/queries/polls');

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
  const creatorLink = req.body.creator_link;
  const pollLink = req.body.poll_link;
  pollQueries.submitPollQuestion(pollQuestion, creatorLink, pollLink)
  .then((poll) => {
    res.render('polls/create_poll', { poll })
  });
});

module.exports = router;
