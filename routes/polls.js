/*
 * All routes for Polls are defined here
 * Since this file is loaded in server.js into /polls,
 *   these routes are mounted onto /polls
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const pollQueries = require('../db/queries/polls');

router.get('/', (req, res) => {
  pollQueries.getPolls()
  .then((polls) => {
    res.render('polls.ejs',{polls});
  });
});

module.exports = router;
