const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Required for AWS RDS (optional)
  },
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL RDS"))
  .catch((err) => console.error("Database connection error:", err));

module.exports = pool;
