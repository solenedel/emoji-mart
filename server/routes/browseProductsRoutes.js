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
    // ⚠️ QUERY WORKS WITH LIKE OPERATOR BUT NOT = ?? (returns empty array)

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

  // show products using the filter form (price and/or category)
  router.get(`/search/price/:minPrice/:maxPrice/:category`, (req, res) => {
    let queryText = `SELECT * FROM products `;

    if (req.params.minPrice) {
      queryText += ` WHERE price >= $1 `;
    }

    if (req.params.maxPrice) {
      queryText += ` AND price <= $2 `;
    }

    if (req.params.category) {
      queryText += ` AND category = $3 `;
    }

    // add ending to query
    queryText += ` ORDER BY price; `;
    console.log("queryText", queryText);

    const values = [
      req.params.minPrice,
      req.params.maxPrice,
      req.params.category,
    ];

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

// add a product to the cart
/*
app.post(`/products/add-to-cart/:username`, (req, res) => {
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
