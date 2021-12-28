// ---------------- Express server --------------------- //

const express = require('express');
const cors = require('cors');


const dotenvPath = '../.env';  // specify path to .env file
require('dotenv').config({ path: dotenvPath }); 

// Postgres database connection set up
const { Pool } = require('pg');
const dbParams = require('./db/dbParams');

const db = new Pool(dbParams);
db.connect(() => console.log('✅ connected to db'));

// Express configuration
const app = express();
const PORT = 8081;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup cors options
const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));


// ---------------------------- ROUTES -------------------------------- //

// ------------------------ Home page routes -------------------------- //

// get all products on sale
app.get('/on-sale', (req, res) => {
  const queryText = `SELECT * FROM products WHERE on_sale = $1;`
  const values = [TRUE];
  db.query(queryText, values)
  .then((results) => {
    console.log('results.rows', results.rows);
    res.json(results.rows);
  })
  .catch((err) => {
    console.log(err);
    res.json([]);
  });
});

// -------------------------------------------------------------------- //

app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);
});

