# Emoji mart 🔥

A mock online shop. Browse items by category, price or name. Add/remove items to your favorites or your shopping cart. 

**tools / frameworks**
- Front end: ReactJS
- Back end: Node.js
- Database: Postgres

### Key
- 📍 currently working on 
- ⚠️ bug / to fix / needs attention / modularise
- ✅ complete


## Running the app

Running in development mode: `npm run dev`
This starts the node server and the react app concurrently.

Resetting the database: `npm run reset-db`

---

## BUGS

- (not really a bug) if dark theme is selected and page is refreshed, screen flashes white before loading dark mode again
- **not critical** :3000/favicon.ico:1 Failed to load resource: the server responded with a status of 404 (Not Found)



## TO DO - not styling

- 📍 filter by price
- change local storage method
- modularise Category button into one component & pass category name as props
- set up mocha and chai tests
- react fragments
- add reviews table to schema

## TO DO - styling

- use css grid for products display
- set up bootstrap
- fade-in and fade-out when products appear and disappear
- selected category button styled differently when selected/clicked
- flip menu mask in mobile menu

## NOTES
- product quantities in cart?
- use put or post request?


## Main Features (MVP)

- browse products: filter by category, search by name
- filter products by price
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
