const db = require('../connection');

const getResponses = () => {
  return db.query('SELECT * FROM responses;')
    .then(data => {
      return data.rows;
    });
};

const getResponseById = (id) => {
  return db.query('SELECT * FROM responses WHERE id = $1', [id])
    .then(data => {
      return data.rows[0];
    });
};

const getResponsesByPollId = (id) => {
  return db.query('SELECT * FROM responses WHERE poll_id = $1', [id])
  .then(data => {
    return data.rows;
  });
};

const submitResponse = (respondent_id, poll_id, choice1, choice2, choice3) => {
  return db.query(`
    INSERT INTO responses (respondent_id, poll_id, choice1, choice2, choice3)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`, [respondent_id, poll_id, choice1, choice2, choice3])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getResponses, getResponseById, submitResponse, getResponsesByPollId };

