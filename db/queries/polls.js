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

const submitPoll = (question) => {
  return db.query(`
    INSERT INTO polls (question, creator_link, poll_link)
    VALUES ($1, creator_link, poll_link)`, [question])
  .then(data => {
    return data.rows[0];
  });
};

module.exports = { getPolls, getPollById, submitPoll };
