const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
   add,
   findAll,
   findSorted
};

async function add(scoreData){
   const [id] = await db('scores').insert(scoreData)
   return id
}

function findAll(){
   return db('scores')
}

function findSorted(){
   return db('scores')
   .orderBy('score', 'desc')
   .limit(50)
}