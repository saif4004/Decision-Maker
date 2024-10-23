/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

// GET /users
router.get('/', (req, res) => {
  // Extract poll data from the query parameters
  const pollQuestion = req.query.pollQuestion || '';
  const creatorLink = req.query.creatorLink || '';
  const pollLink = req.query.pollLink || '';
  const titles = JSON.parse(req.query.titles || '[]');

  res.render('users', { pollQuestion, creatorLink, pollLink, titles });
});

module.exports = router;
