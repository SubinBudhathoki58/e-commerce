# 🛍️ Jersey E-Commerce Store

A modern, fully-functional e-commerce application built with React for browsing and purchasing sports jerseys.

**Live Demo:** https://jersey-ecommerce.netlify.app/

---

## 📋 Project Overview

Jersey E-Commerce Store is a single-page web application that allows users to:
- Browse a catalog of sports jerseys
- View detailed product information
- Add items to a shopping cart
- Manage cart quantity (increment/decrement)
- View order totals with tax calculations
- Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18.2** | Frontend framework & UI components |
| **React Router DOM 6.22** | Client-side routing & navigation |
| **Styled Components 6.1** | Component-scoped CSS styling |
| **Bootstrap 5.3** | Responsive UI framework |
| **Font Awesome 6.5** | Icon library |
| **React Icons 5.1** | Additional icon set |

---

## 📁 Project Structure

```
e-commerce/
├── public/                    # Static files
├── src/
│   ├── Components/           # React components
│   │   ├── Navbar.js         # Navigation header
│   │   ├── JerseyList.js     # Product listing page
│   │   ├── Details.js        # Product detail view
│   │   ├── Cart.js           # Shopping cart page
│   │   ├── Modal.js          # Modal dialog component
│   │   └── Default.js        # 404 page
│   ├── App.js                # Main app component with routes
│   ├── Context.js            # State management with React Context
│   ├── data.js               # Product data
│   ├── index.js              # React entry point
│   └── App.css               # Global styles
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

---

## ⚡ Key Features

### 1. **Product Browsing**
   - View all available jerseys on the home page
   - Browse products with images and prices
   - Quick add-to-cart functionality

### 2. **Product Details**
   - View detailed information about selected jersey
   - See product description and full pricing
   - Add item to cart from detail page

### 3. **Shopping Cart**
   - View all items added to cart
   - Increment/decrement quantity
   - Remove items from cart
   - Automatic calculation of:
     - Subtotal
     - Tax (10%)
     - Total price
   - Clear entire cart

### 4. **State Management**
   - Uses React Context API for global state
   - Efficient cart management
   - Modal notifications

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SubinBudhathoki58/e-commerce.git
cd e-commerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm eject` | Ejects from Create React App (irreversible) |

---

## 🎨 Language Composition

- **JavaScript**: 90%
- **HTML**: 6.4%
- **CSS**: 3.6%

---

## 🔄 How State Management Works

The application uses **React Context API** (`Context.js`) for centralized state management:

### State Properties
- `jerseys` - Array of all available products
- `cart` - Items currently in shopping cart
- `detailJersey` - Currently selected product details
- `modalOpen` - Modal visibility state
- `cartSubTotal` - Cart subtotal before tax
- `cartTax` - Calculated tax (10%)
- `cartTotal` - Final total price

### Key Methods
- `handleDetail(id)` - Fetch product details
- `addToCart(id)` - Add item to cart
- `increment(id)` - Increase item quantity
- `decrement(id)` - Decrease item quantity
- `removeItem(id)` - Remove item from cart
- `clearCart()` - Empty entire cart
- `addTotals()` - Calculate cart totals

---

## 📱 Routing

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | JerseyList | Home page - product listing |
| `/details` | Details | Product detail view |
| `/cart` | Cart | Shopping cart page |
| `*` | Default | 404 error page |

---

## 🖥️ Live Demo

Visit the deployed application: https://jersey-ecommerce.netlify.app/

---

## 📝 Notes

- Tax is automatically calculated at 10% of the subtotal
- Products have quantity tracking (count)
- Cart persists component state during session
- Responsive design optimized for all screen sizes

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 👨‍💻 Author

[Subin Budhathoki](https://github.com/SubinBudhathoki58)

---

## 🤝 Contributing

Feel free to fork this project, submit issues, and send pull requests to help improve it!
