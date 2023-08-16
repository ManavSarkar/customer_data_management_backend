const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
try {
  pool.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  });
} catch (error) {
  console.log(error);
}

// create customer table if not exist
const createCustomerTable =
  "CREATE TABLE IF NOT EXISTS customers (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL)";
pool.query(createCustomerTable, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Created customer table");
  }
});

module.exports = pool;
