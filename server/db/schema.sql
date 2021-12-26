-- Schema for postgres database

-- NOTES
-- have a product quantity in products table (only visible to admin) ?
-- for now, image path is served from the img folder- later change this?
-- shipping cart table? or just in-cart boolean on favs table?


-- Drop any existing tables to start fresh
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;
DROP TABLE IF EXISTS cart CASCADE;

-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL, 
  username VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL, 
  password VARCHAR(50) NOT NULL
);

-- Products table 
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL, 
  description TEXT NOT NULL,
  price DECIMAL(5,2), 
  sold_out BOOLEAN NOT NULL, 
  image_path VARCHAR(255) NOT NULL, 
  category VARCHAR(255) NOT NULL 
);

-- Favorites table
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL, 
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
);

-- Shopping cart table
CREATE TABLE cart (
  id SERIAL PRIMARY KEY NOT NULL, 
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE, 
  quantity INTEGER NOT NULL default 1
);

