import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/CartItems";
import Grid from "./components/Grid";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";

import "./App.css";


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
        <Route path="/" element={<Grid />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart-items" element={<Cart />} /> 
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="confirmation" element={<Confirmation />}/>
      </Routes>
    </Router>
=======
      <div>
        <Header />
        <Routes>
          {/* Define the route for Landingpage */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/" element={<PastMatches />} />
          <Route path="/all-past-matches" element={<AllPastMatches />} />
          <Route path="/" element={<FutureMatches />} />
          <Route path="/all-future-matches" element={<AllFutureMatches />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
