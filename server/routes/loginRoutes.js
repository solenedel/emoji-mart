// ------------------------ Login page routes -------------------------- //

const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

module.exports = (db) => {
  // get login page
  router.get("/", (req, res) => {
    if (!req.session || !req.session.user) {
      res.json({ auth: false });
    } else {
      const text = "SELECT username FROM users WHERE id = $1";
      const values = [req.session.user];
      db.query(text, values)
        .then((data) => {
          res.json({ auth: true, username: data.rows[0].username });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  // login user authentication & set cookies
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    const queryText =
      "SELECT password, id, username FROM users WHERE email = $1;";
    const values = [email];

    db.query(queryText, values)
      .then((data) => {
        if (data.rows.length > 0) {
          // console.log("DATA.ROWS[0]", data.rows[0]);
          if (bcrypt.compareSync(password, data.rows[0].password)) {
            // set a cookie in server and send to client side
            req.session.user = data.rows[0].id;
            console.log("session", req.session);
            res.json({ auth: true, username: data.rows[0].username });
          } else {
            console.log(`invalid password ${password}`);
            throw new Error("invalid password");
          }
        } else {
          console.log(`No user with email ${email} was found!`);
          throw new Error(`no user with email ${email} was found`);
        }
      })
      .catch((err) => {
        req.session = null;
        res.json({ auth: false });
        console.log(err);
      });
  });
  return router;
};
