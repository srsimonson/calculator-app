const pg = require('pg');
const Pool = pg.Pool;
const url = require('url');
let config = {};

if (process.env.DATABASE_URL) {
    // Heroku gives a url, not a connection object
    // https://github.com/brianc/node-pg-pool
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');
  
    config = {
      user: auth[0],
      password: auth[1],
      host: params.hostname,
      port: params.port,
      database: params.pathname.split('/')[1],
      ssl: { rejectUnauthorized: false },
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
  } else {
    config = {
      host: 'localhost', // Server hosting the postgres database
      port: 5432, // env var: PGPORT
      database: 'calculator', // CHANGE THIS LINE! env var: PGDATABASE, this is likely the one thing you need to change to get up and running
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
  }
  
const pool = new pg.Pool(config);
// const pool = new Pool({
//    database: process.env.DATABASE_NAME || 'weekend-to-do-app',
//    host: 'localhost',
//    port: 5432,
//    max: 10,
//    idleTimeoutMillis: 30000
// });

pool.on('connect', () => {
    console.log('Postgres connected');
});

pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
  });

// pool.on('error', (error) => {
//     console.log('ERROR with postgres pool', error);
// });

module.exports = pool;