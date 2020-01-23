const db = require('../data/db-config.js');

// above the fold. the title
module.exports = {
 list,
 findById, 
 insert, 
 update
};
// dont forget to "return" the database
//implementation details

function list(){
// select * from users;
return db.select('*').from('users');
// return db('users'); does the same thind
}

function findById(id){
// select * from users where id = ?
  return db('users')
  .where({ id })
  .first();
// return db('users').where('id')
}

function insert(user){
return  db('users')
.insert(user)
.then(ids => (ids[0]));
}

function update(user){
   return  db('users')
    .where({ id })
    .update(changes);
}