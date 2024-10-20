const db = require('../connection');

const getPollCreators = () => {
  return db.query('SELECT * FROM poll_creators;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPollCreators };
