const db = require('../connection');

const getPolls = () => {
  return db.query('SELECT * FROM polls;')
    .then(data => {
      return data.rows;
    });
};

const getPollById = (id) => {
  return db.query('SELECT * FROM polls WHERE id = $1', [id])
    .then(data => {
      return data.rows[0];
    });
};

const getPollsByCreator = (id) => {
  return db.query(`
    SELECT users.name, polls.id
    FROM poll_creators
    JOIN users ON user_id = users.id
    JOIN polls ON poll_id = polls.id
    WHERE user.id = $1`, [id])
    .then(data => {
      return data.rows[0];
    });
};

// change polls table to allow null links?
const submitPollQuestion = (question, creatorLink, pollLink) => {
  return db.query(`
    INSERT INTO polls (question, creator_link, poll_link)
    VALUES ($1, $2, $3)
    RETURNING *`, [question, 1, 1])
  .then(data => {
    return data.rows[0];
  });
};

module.exports = { getPolls, getPollById, getPollsByCreator, submitPollQuestion };
