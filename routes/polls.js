/*
 * All routes for Polls are defined here
 * Since this file is loaded in server.js into /polls,
 *   these routes are mounted onto /polls
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const pollQueries = require('../db/queries/polls');

// GET /polls/
router.get('/', (req, res) => {
  pollQueries.getPolls()
  .then((polls) => {
    res.render('polls.ejs',{ polls });
  });
});

// GET /polls/:id
router.get('/:id', (req, res) => {
  const pollId = req.params.id;
  pollQueries.getPollById(pollId)
  .then((poll) => {
    res.render('polls/:id', poll)
  });
});

// POST /polls/create_poll
router.get('/create_poll', (req, res) => {
  console.log('*** req: ', req);
  pollQueries.submitPoll()
});

module.exports = router;
