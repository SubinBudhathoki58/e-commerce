import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={ProductList} />
          <Route exact path="/details" Component={Details} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/default" Component={Default} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
