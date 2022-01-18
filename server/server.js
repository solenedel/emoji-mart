// ---------------- Express server --------------------- //

const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const { Pool } = require("pg");

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
const dbParams = require("./db/dbParams");

const db = new Pool(dbParams);
db.connect(() => console.log("✅ connected to db"));

// Express configuration
const app = express();
const PORT = 8081;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create keys for cookies
const key1 = process.env.COOKIE_KEY_1;
const key2 = process.env.COOKIE_KEY_2;
const key3 = process.env.COOKIE_KEY_3;

// set up cookies and user sessions
app.use(
  cookieSession({
    name: "session",
    keys: [key1, key2, key3],
    // cookie expires after 24 hours
    maxAge: 24 * 60 * 60 * 1000,
  })
);

// setup cors options
const corsOptions = {
  origin: ORIGIN_URL,
};
app.use(cors(corsOptions));

// ---------------------------- ROUTES -------------------------------- //

// login routes
const loginRouter = require("./routes/loginRoutes");

app.use("/login", loginRouter(db));

// home page routes
const homePageRouter = require("./routes/homePageRoutes");

app.use("/", homePageRouter(db));

// products page routes
const productsRouter = require("./routes/productsRoutes");

app.use("/products", productsRouter(db));

// ------------------------ Cart page routes -------------------------- //

// get products from a logged in user's cart
app.get(`/cart/:username`, (req, res) => {
  if (req.session || req.session.user) {
    console.log("REQ.SESSION", req.session);

    const queryText = `SELECT product_id, quantity, name, image_path FROM cart
                     JOIN users ON user_id = users.id
                     JOIN products on product_id = products.id
                     WHERE user_id = $1;`;

    const values = [req.session.user];

    db.query(queryText, values)
      .then((results) => {
        res.json(results.rows);
        console.log("RESULTS.ROWS", results.rows);
      })
      .catch((err) => {
        console.log(err);
        res.json([]);
      });
  }
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
