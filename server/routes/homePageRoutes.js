// ------------------------ Home page routes -------------------------- //
const express = require("express");

const router = express.Router();

module.exports = (db) => {
  // get all products on sale
  router.get("/", (req, res) => {
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
  router.get("/featured", (req, res) => {
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

  return router;
};
