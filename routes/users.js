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
  userQueries.getUsers()
  .then((polls) => {
    res.render('users',{ users });
  });
});

module.exports = router;
