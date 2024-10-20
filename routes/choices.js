/*
 * All routes for Choices are defined here
 * Since this file is loaded in server.js into /choices,
 *   these routes are mounted onto /choices
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('choices');
});

module.exports = router;
