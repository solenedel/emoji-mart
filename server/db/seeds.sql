-- Seeds for postgres database

-- seeds for users table

INSERT INTO users (username, email, password)
VALUES ('Mario', 'mario@mail.com', 'password1');

INSERT INTO users (username, email, password)
VALUES ('Luigi', 'luigi@mail.com', 'password2');



-- seeds for Products table

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('mango', 'a ripe mango.', 3.00, FALSE, '🥭', 'Fruits', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('kiwi', 'a nice kiwi.', 2.50, FALSE, '🥝', 'Fruits', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('strawberries', 'local and organic.', 3.75, TRUE, '🍓', 'Fruits', FALSE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('sunflower', 'a very tall sunflower.', 2.99, FALSE, '🌻', 'Plants', FALSE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('tulip', 'a tulip from Holland.', 4.75, TRUE, '🌷', 'Plants', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('cactus', 'a bit of a prick.', 2.50, FALSE, '🌵', 'Plants', TRUE);



-- seeds for Favorites table

INSERT INTO favorites (id, user_id, product_id)
VALUES (1, 1, 1);

INSERT INTO favorites (id, user_id, product_id)
VALUES (2, 2, 1);

INSERT INTO favorites (id, user_id, product_id)
VALUES (3, 2, 4);

INSERT INTO favorites (id, user_id, product_id)
VALUES (4, 1, 3);



-- seeds for shopping cart table

INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (1, 1, 3, 1);

INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (2, 1, 2, 2);

INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (3, 2, 4, 5);

INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (4, 2, 1, 1);