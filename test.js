
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '173.212.225.166',
    port: 3306, // Default MySQL port
  user: 'root',
  password: 'SribasBis@22',
  database: 'neuzmail_ori',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.query('SELECT 1 + 1', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Connected to MySQL server:', results);
});
