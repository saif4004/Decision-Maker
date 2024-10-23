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
  const url = 'localhost:8080/polls/';

  const pollQuestion = req.body.question;
  const creatorLink = url + Math.random().toString(36).slice(2);
  const pollLink = url + Math.random().toString(36).slice(2);
  const title1 = req.body.titles[0];
  const description1 = req.body.descriptions[0];
  const title2 = req.body.titles[1];
  const description2 = req.body.descriptions[1];
  const title3 = req.body.titles[2];
  const description3 = req.body.descriptions[2];

  pollQueries.submitPollQuestion(pollQuestion, creatorLink, pollLink, title1, description1, title2, description2, title3, description3)
  .then((poll) => {
    res.json(poll);
  });
});

module.exports = router;
