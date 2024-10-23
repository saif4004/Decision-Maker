const db = require('../connection');

const getResponsesByUsers = (id) => {
  return db.query(`
    SELECT users.name, choice1, choice2, choice3
    FROM responses
    JOIN users ON respondent_id = users.id
    WHERE poll_id = $1`, [id])
  .then(data => {
    return data.rows;
  });
};

module.exports = { getResponsesByUsers  };
