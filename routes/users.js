/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const pollsQueries = require('../db/queries/polls');

router.get('/:pollId', (req, res) => {
  const pollId = req.params.pollId;
  console.log("Did i get open: ",pollId);
  pollsQueries.getPollById(pollId)
    .then(poll => {
       const templateVars = {
        pollId: poll.id,
        pollQuestion: poll.question,
        creatorLink: poll.creator_link,
        pollLink: poll.poll_link,
        titles: [poll.title1, poll.title2, poll.title3],
        descriptions: [poll.description1, poll.description2, poll.description3],
      };
      res.render('users', templateVars);
    })
});

module.exports = router;
