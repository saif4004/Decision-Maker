const db = require('../connection');

const getPollCreators = () => {
  return db.query('SELECT * FROM poll_creators;')
    .then(data => {
      return data.rows;
    });
};

const getPollCreatorById = (id) => {
  return db.query('SELECT * FROM poll_creators WHERE  = $1', [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getPollCreators, getPollCreatorById };

/*
GET poll_creators
poll_creators
user_id (FKs)
poll_d (FKs)
creator BOOL true or false

SELECT * FROM poll_creators WHERE creator IS TRUE;
*/
