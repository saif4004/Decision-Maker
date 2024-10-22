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

const submitChoices = (title1, description1, title2, description2, title3, description3) => {
  return db.query(`
    INSERT INTO choices (title1, description1, title2, description2, title3, description3)
    VALUES ($1, $2, $3, $4, $5, $6)`, [title1, description1, title2, description2, title3, description3])
    .then(data => {
      return data.rows[0];
    });
}

module.exports = { getChoices, getChoiceById, submitChoices };
