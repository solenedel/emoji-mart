// ------------------------ Products page routes -------------------------- //

const express = require("express");

const router = express.Router();

module.exports = (db) => {
  // show products from a certain category
  router.get(`/category/:category`, (req, res) => {
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

  // view the page for a specific product
  router.get(`/view/:name`, (req, res) => {
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

  // show products from a search query
  router.get(`/search/:searchQuery`, (req, res) => {
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

  return router;
};
