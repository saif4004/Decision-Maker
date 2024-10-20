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

module.exports = { getResponses, getResponseById };
