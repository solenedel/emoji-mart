// ---------------- Express server --------------------- //

const express = require('express');


const dotenvPath = '../.env';  // specify path to .env file
require('dotenv').config({ path: dotenvPath }); 

// Postgres database connection set up
const { Pool } = require('pg');

