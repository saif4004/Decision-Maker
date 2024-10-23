const express = require('express');
const router  = express.Router();
const responseQueries = require('../db/queries/responses');


router.get('/', (req, res) => {
  responseQueries.getResponses()
  .then((responses) => {
    res.render('responses.ejs', { responses });
  });
});

module.exports = router;
