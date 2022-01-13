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

// view the page for a specific product
app.get(`/products/view/:name`, (req, res) => {
  const queryText = `SELECT * FROM products
                     WHERE name LIKE $1;`;
  // NOTE: WORKS WITH LIKE OPERATOR BUT NOT = ?? (returns empty array)

  const values = [`%${req.params.name}%`];

  db.query(queryText, values)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
});

// ------------------------ Browse products page routes -------------------------- //

// show products from a certain category
app.get(`/products/category/:category`, (req, res) => {
  const queryText = `SELECT * FROM products
                     WHERE category = $1
                     ORDER BY random();`;

  const values = [req.params.category];

  db.query(queryText, values)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
});

// show products from a search query
app.get(`/products/search/:searchQuery`, (req, res) => {
  const queryText = `SELECT * FROM products
                     WHERE name LIKE $1
                     OR category LIKE $1;`;

  const values = [`%${req.params.searchQuery}%`];

  db.query(queryText, values)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
});

// ------------------------ Single product page routes -------------------------- //

// add a product to the cart
/*
app.post(`/add-to-cart/:username`, (req, res) => {
  const queryText = `INSERT INTO cart
                     WHERE user_id = $1
                     VALUES (user_id, product_id, quantity) ;`;

  const values = [req.params.username, ];

  db.query(queryText, values)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
}); */

// -------------------------------------------------------------------- //

app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);
});
