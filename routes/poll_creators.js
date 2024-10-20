/*
 * All routes for Users_Polls are defined here
 * Since this file is loaded in server.js into /users_polls,
 *   these routes are mounted onto /users_polls
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const pollCreatorQueries = require('../db//queries/poll_creators');

router.get('/', (req, res) => {
  res.render('users_polls');
});

module.exports = router;
