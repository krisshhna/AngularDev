// const mysql          =   require('mysql') // This is used to import everything from the package.
const { createPool }    = require('mysql'); // if we don't want everything just specific things to import

const pool  =   createPool({
    port:               process.env.APP_PORT,
    host:               process.env.DB_HOST,
    username:           process.env.DB_HOST,
    password:           process.env.DB_PASS,
    database:           process.env.MYSQL_DB,
    connectionLimit:    10,
});

module.exports = pool;