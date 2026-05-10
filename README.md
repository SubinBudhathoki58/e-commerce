# Jersey E-Commerce Store

A modern e-commerce application built with React for browsing and purchasing sports jerseys. This project showcases a complete shopping experience with product browsing, detailed views, and a fully functional shopping cart.

**Live Demo:** https://jersey-ecommerce.netlify.app/

---

## Overview

Jersey E-Commerce Store is a single-page application built with React that lets you browse through a collection of sports jerseys and manage your shopping cart. Whether you're looking for a specific team jersey or just browsing, this app provides a smooth and intuitive shopping experience.

**Key capabilities:**
- Browse a catalog of sports jerseys with images and pricing
- View detailed product information before purchasing
- Add items to your shopping cart with ease
- Adjust quantities or remove items as needed
- See automatic calculations for subtotals, tax, and total price
- Works seamlessly on desktop and mobile devices

---

## Tech Stack

| Technology | What It Does |
|-----------|---------|
| React 18.2 | The main framework for building the user interface |
| React Router DOM 6.22 | Handles navigation between pages |
| Styled Components 6.1 | Manages component-specific styling |
| Bootstrap 5.3 | Provides responsive layout and components |
| Font Awesome 6.5 | Icons throughout the app |
| React Icons 5.1 | Additional icon library |

---

## Project Structure

Here's how the project is organized:

```
e-commerce/
├── public/                    # Static files and assets
├── src/
│   ├── Components/           # React components that make up the app
│   │   ├── Navbar.js         # Top navigation bar
│   │   ├── JerseyList.js     # Main page showing all products
│   │   ├── Details.js        # Product detail page
│   │   ├── Cart.js           # Shopping cart page
│   │   ├── Modal.js          # Pop-up notifications
│   │   └── Default.js        # 404 error page
│   ├── App.js                # Main app component with routing
│   ├── Context.js            # Global state management
│   ├── data.js               # Product data
│   ├── index.js              # React entry point
│   └── App.css               # Global styles
├── package.json              # Project dependencies
└── README.md                 # This file
```

---

## Features

### Browse Products
The home page displays all available jerseys. You can see product images, names, and prices at a glance. There's a quick "add to cart" button for each item to make shopping fast and easy.

### Product Details
Want to know more about a specific jersey? Click on any product to see detailed information including full descriptions and pricing. You can also add the item to your cart from this page.

### Shopping Cart
Your cart shows everything you've added with the ability to:
- Change quantity for each item (increase or decrease)
- Remove items you don't want anymore
- See a breakdown of your costs: subtotal, tax (10%), and final total
- Clear your entire cart if you want to start over

### Smart State Management
The app uses React's Context API to manage all your shopping data in one place. This means your cart updates instantly across the entire app without any lag.

---

## Getting Started

### What You Need
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository to your computer:
```bash
git clone https://github.com/SubinBudhathoki58/e-commerce.git
cd e-commerce
```

2. Install all the required packages:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

---

## Available Commands

| Command | What It Does |
|---------|-------------|
| `npm start` | Starts the development server |
| `npm build` | Creates an optimized production build |
| `npm test` | Runs the test suite |
| `npm eject` | Ejects from Create React App (can't be undone) |

---

## Language Composition

This project is built primarily with JavaScript with some HTML and CSS:

- JavaScript: 90%
- HTML: 6.4%
- CSS: 3.6%

---

## How State Works

The app's data management is centralized using React's Context API. Here's what gets tracked:

**Data Being Stored:**
- All available jerseys in the store
- Items in your shopping cart
- Details about the jersey you're currently viewing
- Whether modals (pop-ups) should be visible
- Cart calculations (subtotal, tax, total)

**Main Actions:**
- `handleDetail(id)` - Load details for a specific jersey
- `addToCart(id)` - Add an item to your cart
- `increment(id)` - Increase quantity of an item
- `decrement(id)` - Decrease quantity of an item
- `removeItem(id)` - Delete an item from cart
- `clearCart()` - Empty the entire cart
- `addTotals()` - Recalculate all the numbers

---

## Page Routes

| URL | Purpose |
|-------|---------|
| `/` | Home page showing all jerseys |
| `/details` | Individual product detail page |
| `/cart` | Your shopping cart |
| `*` | 404 page when something isn't found |

---

## Live Demo

Check out the live version here: https://jersey-ecommerce.netlify.app/

---

## How It Works

- Tax is calculated automatically at 10% of whatever you're buying
- Each product tracks how many are in stock
- Your cart data stays while you're shopping (but resets when you refresh)
- The design automatically adjusts to look good on phones, tablets, and computers

---

## License

This project is open source and available for personal and educational use.

---

## Author

Created by [Subin Budhathoki](https://github.com/SubinBudhathoki58)

---

## Want to Help?

Feel free to fork this project, report any issues, or send pull requests with improvements. All contributions are welcome!
