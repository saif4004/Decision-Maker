const db = require('../connection');

const getChoices = () => {
  return db.query('SELECT * FROM choices;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getChoices };
