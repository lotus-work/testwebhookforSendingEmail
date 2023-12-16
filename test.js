const express = require('express');
const mysql = require('mysql2');

const app = express();

const pool = mysql.createPool({
  host: '173.212.225.166',
  port: 3306,
  user: 'root',
  password: 'SribasBis@22',
  database: 'neuzmail_ori',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoint to retrieve data from the 'users' table
app.get('/users', (req, res) => {
  // Query to select all rows from the 'users' table
  const sql = 'SELECT * FROM users';

  // Execute the query
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Send the results as JSON
    res.json(results);
  });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
