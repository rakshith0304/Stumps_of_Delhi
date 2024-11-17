import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/CartItems";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";


import Landingpage from "./components/LandingPage/Landingpage";
import PastMatches from "./components/LandingPage/PastMatches";
import AllPastMatches from "./components/LandingPage/AllPastMatches";
import FutureMatches from "./components/LandingPage/FutureMatches";
import AllFutureMatches from "./components/LandingPage/AllFutureMatches";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Primary Landing Page */}
        <Route path="/" element={<Landingpage />} />

        {/* Shop, Cart, and Checkout */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart-items" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />

        {/* Match Routes */}
        <Route path="/past-matches" element={<PastMatches />} />
        <Route path="/all-past-matches" element={<AllPastMatches />} />
        <Route path="/future-matches" element={<FutureMatches />} />
        <Route path="/all-future-matches" element={<AllFutureMatches />} />

        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
