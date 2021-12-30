# Emoji mart 🔥

This is a mock e-commerce app (no payment features).

Database: Postgres
Front end: ReactJS, Bootstrap, SASS
Back end: Node.js

## Running the app

Running in development mode: `npm run dev`
This starts the node server and the react app concurrently.

Resetting the database: `npm run reset-db`

-----
## TO DO
- set up linter (prettier & airBNB)
- modularise sale products and featured product into the same product component
- set up mocha and chai tests

## NOTES 
- featured product component should look different from the sale products

## Main Features
- login / create an account
- browse items: filter by category, price
- add, remove items from cart
- add items to favourites
- search product by name
- day / night mode
- change language feature

**Pages:**
- Login/sign up
- Home Page (has products & filtering options)
- Navbar with dropdown menu for categories
- My cart page
- My favourites page


## Extra features (stretch)

- admin login & add/edit/delete items from database
- testing (Mocha & chai on testing branch)


### Resources/links/tutorials used

https://emoji-api.com/
[dark mode tutorial](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)
