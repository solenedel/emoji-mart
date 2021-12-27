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



// -------------------------------------------------------------------- //

app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);
});

