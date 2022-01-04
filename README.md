# Emoji mart 🔥

A mock online shop. Browse items by category, price or name. Add/remove items to your favorites or your shopping cart. 

Categories include:
- fruits
- plants
- food
- drink

**tools / frameworks**
- Database: Postgres
- Front end: ReactJS, Bootstrap, SASS
- Back end: Node.js

## Running the app

Running in development mode: `npm run dev`
This starts the node server and the react app concurrently.

Resetting the database: `npm run reset-db`

---

## BUGS
- newly added seeds not being returned in node or axios requests
- reset-db script not working
- STYLING: desktop navbar is rendered incorrectly & keeps breaking after appearing to be fixed

## TO DO

- modularise sale products and featured product into the same product component
- hamburger menu
- set up mocha and chai tests


## NOTES

- featured product component should look different from the sale products
- if dark theme is selected and page is refreshed, screen flashes white before loading dark mode again


## Main Features (MVP)

- browse items: filter by category, price, search by name
- login / create an account
- add, remove items from cart
- add, femove items from favourites


## Extra features (stretch)

- admin login & add/edit/delete items from database
- testing (Mocha & chai on testing branch)
- change language feature
- fake checkout/payment feature (stripe)

### Resources/links/tutorials used

[dark mode tutorial](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)
[linting setup guide](https://dev.to/saurabhggc/add-eslint-prettier-and-airbnb-to-your-project-3mo8)
**NOTE** make sure to quit and restart VScode after setting up the linting
https://emoji-api.com/
