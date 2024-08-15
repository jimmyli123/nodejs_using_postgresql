const { Pool } = require("pg");
require('dotenv').config();
console.log(process.env)


module.exports = new Pool({
  host: process.env.HOST_ENV,
  user: process.env.USER_ENV,
  database: process.env.DATABASE_ENV,
  password: process.env.PASSWORD_ENV,
  port: process.env.PORT_ENV


});
