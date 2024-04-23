import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import JerseyList from "./Components/JerseyList";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";
import Modal from "./Components/Modal";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={JerseyList} />
        <Route exact path="/details" Component={Details} />
        <Route exact path="/cart" Component={Cart} />
        <Route component={Default}/>
      </Routes>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
