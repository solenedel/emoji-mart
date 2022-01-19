// ------------- helper functions used in server-side code ------------ //

const bcrypt = require("bcrypt");

// PASSWORD HASH FUNCTION: store hashed version of the password in database
bcrypt.hash("ENTER PASSWORD HERE", 10, (err, hash) => {
  if (err) console.log(err);
  console.log("hashed password: ", hash);
});
