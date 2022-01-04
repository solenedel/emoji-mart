// ---------------- Express server --------------------- //

const express = require("express");
const cors = require("cors");

let dotenvPath = ""; // specify path to .env file

let ORIGIN_URL = "";
if (process.env.NODE_ENV === "production") {
  console.log("running in production!");
  ORIGIN_URL = "*";
  dotenvPath = "../.env";
} else {
  console.log("running in development!");
  ORIGIN_URL = "*";
  dotenvPath = "../.env";
}

require("dotenv").config({ path: dotenvPath });

// Postgres database connection set up
const { Pool } = require("pg");
const dbParams = require("./db/dbParams");

const db = new Pool(dbParams);
db.connect(() => console.log("✅ connected to db"));

// Express configuration
const app = express();
const PORT = 8081;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup cors options
const corsOptions = {
  origin: ORIGIN_URL,
};
app.use(cors(corsOptions));

// ---------------------------- ROUTES -------------------------------- //

// ------------------------ Home page routes -------------------------- //

// get all products on sale
app.get("/", (req, res) => {
  const queryText = `SELECT * FROM products 
                     WHERE on_sale = TRUE
                     ORDER BY random()
                     LIMIT 6;`;
  // const values = [TRUE];
  db.query(queryText)
    .then((results) => {
      console.log("results.rows", results.rows);
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
});

// get a random product from products (featured)
app.get("/featured", (req, res) => {
  const queryText = `SELECT * FROM products 
                     ORDER BY random()
                     LIMIT 1;`;
  db.query(queryText)
    .then((results) => {
      console.log("RANDOM ROW: ", results.rows);
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
