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
    WHERE users.id = $1
    AND creator IS TRUE`, [id])
    .then(data => {
      return data.rows[0];
    });
};

const submitPollQuestion = (question, creator_link, poll_link, title1, description1, title2, description2, title3, description3) => {
  return db.query(`
    INSERT INTO polls (question, creator_link, poll_link, title1, description1, title2, description2, title3, description3)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *`, [question, creator_link, poll_link, title1, description1, title2, description2, title3, description3])
  .then(data => {
    return data.rows[0];
  });
};

module.exports = { getPolls, getPollById, getPollsByCreator, submitPollQuestion };
