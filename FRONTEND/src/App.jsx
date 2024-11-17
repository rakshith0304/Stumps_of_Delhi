import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/CartItems";
import Grid from "./components/Grid";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Grid />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart-items" element={<Cart />} /> 
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="confirmation" element={<Confirmation />}/>
      </Routes>
    </Router>
  );
};

export default App;
