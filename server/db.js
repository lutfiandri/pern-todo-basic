const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '020302',
  host: 'localhost',
  port: 5432,
  database: 'todo_list',
});

module.exports = pool;
