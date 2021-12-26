-- Seeds for postgres database

-- seeds for users table
INSERT INTO users (username, email, password)
VALUES ('Mario', 'mario@mail.com', 'password1');

INSERT INTO users (username, email, password)
VALUES ('Luigi', 'luigi@mail.com', 'password2');

-- seeds for Products table
INSERT INTO products (name, description, price, sold_out, image_path, category)
VALUES ('mango', 'a ripe mango.', 3, FALSE, 🥭, 'Fruits' );


INSERT INTO products (name, description, price, sold_out, image_path, category)
VALUES ('kiwi', 'a nice kiwi.', 2, FALSE, 🥭, 'Fruits' );


