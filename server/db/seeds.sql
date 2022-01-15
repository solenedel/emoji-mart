-- SEEDS FOR POSTGRES DATABASE
-- NOTES
-- use all lowercase for product names and category names.

-- cart id should be same as user id? user can only have one cart 
-- NO this causes error when running the seeds (cart id must be unique)



-- seeds for users table

INSERT INTO users (username, email, password)
VALUES ('Mario', 'mario@mail.com', '$2b$10$2piIfr/J0tw9BheIAy6/uO0GroOwR89N2iI/10zhXlsx8SjIMgH.C');

INSERT INTO users (username, email, password)
VALUES ('Luigi', 'luigi@mail.com', '$2b$10$qtX7eWeNslp2v5M6cn5C.u/vsEtU1.c.h2vMhqK17UpPudru920fm');

-- NOTE: Demo user has id of 3

INSERT INTO users (username, email, password)
VALUES ('💎Demo', 'demo@mail.com', '$2b$10$snkNZnKWED/p.TNbf8ryE.fGVEKn12LoIIBT0ppZ6aCwsQ7YNf616');


-- seeds for Products table

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('mango', 'a ripe mango.', 3.00, FALSE, '🥭', 'fruits', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('kiwi', 'a nice kiwi.', 2.50, FALSE, '🥝', 'fruits', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('strawberries', 'local and organic.', 3.75, TRUE, '🍓', 'fruits', FALSE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('sunflower', 'a very tall sunflower.', 2.99, FALSE, '🌻', 'plants', FALSE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('tulip', 'a tulip from Holland.', 4.75, TRUE, '🌷', 'plants', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('cactus', 'a bit of a prick.', 2.50, FALSE, '🌵', 'plants', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('tropical punch', 'a mysterious drink.', 3.55, FALSE, '🍹', 'drinks', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('cocktail', 'shaken or stirred.', 5.99, FALSE, '🍸', 'drinks', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('curry rice', 'Japanese curry with rice.', 7.25, TRUE, '🍛', 'food', TRUE);

INSERT INTO products (name, description, price, sold_out, image_path, category, on_sale)
VALUES ('croissant', 'Freshly baked.', 3.75, TRUE, '🥐', 'food', FALSE);


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


-- id 3 = Demo user
INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (3, 3, 4, 5);

INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (4, 3, 1, 1);

INSERT INTO cart (id, user_id, product_id, quantity)
VALUES (5, 3, 7, 1);
