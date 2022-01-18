// ------------------------ Cart page routes -------------------------- //

const express = require("express");

const router = express.Router();

module.exports = (db) => {
  // get products from a logged in user's cart
  router.get(`/:username`, (req, res) => {
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

  return router;
};
