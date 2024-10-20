const db = require('../connection');

const getPollCreators = () => {
  return db.query('SELECT * FROM poll_creators;')
    .then(data => {
      return data.rows;
    });
};

const getPollCreatorById = (id) => {
  return db.query('SELECT * FROM poll_creators WHERE id = $1', [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getPollCreators, getPollCreatorById };
