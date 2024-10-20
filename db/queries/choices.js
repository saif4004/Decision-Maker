const db = require('../connection');

const getChoices = () => {
  return db.query('SELECT * FROM choices;')
    .then(data => {
      return data.rows;
    });
};

const getChoiceById = (id) => {
  return db.query('SELECT * FROM choices WHERE id = $1', [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getChoices, getChoiceById };
