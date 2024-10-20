const db = require('../connection');

const getResponses = () => {
  return db.query('SELECT * FROM responses;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getResponses };
