import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import JerseyList from "./Components/JerseyList";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={JerseyList} />
        <Route exact path="/details" Component={Details} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/default" Component={Default} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
