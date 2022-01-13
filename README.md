# Emoji mart 🔥

A mock online shop. Browse items by category, price or name. Add/remove items to your favorites or your shopping cart. 

Categories include:
- fruits
- plants
- food
- drink

**tools / frameworks**
- Front end: ReactJS
- Back end: Node.js
- Database: Postgres

## Running the app

Running in development mode: `npm run dev`
This starts the node server and the react app concurrently.

Resetting the database: `npm run reset-db`

---

## BUGS

- (not really a bug) if dark theme is selected and page is refreshed, screen flashes white before loading dark mode again



## TO DO
- modularise Category button into one component & pass category name as props
- set up mocha and chai tests
- set up bootstrap
- react fragments
- use css grid for products display
- add reviews table to schema
- fade-in and fade-out when products appear and disappear
- selected category button styled differently when selected/clicked

## NOTES



## Main Features (MVP)

- browse items: filter by category, price, search by name
- login / create an account
- add, remove items from cart
- add, femove items from favourites
- logged in users can add/edit/delete reviews (comments) on products


## Extra features (stretch)

- admin login & add/edit/delete items from database
- testing (Mocha & chai on testing branch)
- change language feature
- fake checkout/payment feature (stripe)
- price randomiser function?
- profile page with user details (username, email, products ordered, comments)
- "products similar to this" or "recently viewed"

### Resources/links/tutorials used

[dark mode tutorial](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)
[linting setup guide](https://dev.to/saurabhggc/add-eslint-prettier-and-airbnb-to-your-project-3mo8)
[search query](https://www.youtube.com/watch?v=LkoSe0ba7SE&ab_channel=TheStoicProgrammers)


**NOTE** make sure to quit and restart VScode after setting up the linting
https://emoji-api.com/
