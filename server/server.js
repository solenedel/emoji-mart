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
    maxAge: 24 * 60 * 60 * 1000, // cookie expires after 24 hours
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

// cart page routes
const cartPageRouter = require("./routes/cartPageRoutes");

app.use("/cart", cartPageRouter(db));

// -------------------------------------------------------------------- //

app.listen(PORT, () => {
  console.log(`✅ Express is listening on port ${PORT}`);
});
