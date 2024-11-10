import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Landingpage from "./components/LandingPage/Landingpage";
import PastMatches from "./components/LandingPage/PastMatches";
import AllPastMatches from "./components/LandingPage/AllPastMatches";
import FutureMatches from "./components/LandingPage/FutureMatches";
import AllFutureMatches from "./components/LandingPage/AllFutureMatches";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define the route for Landingpage */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/" element={<PastMatches />} />
          <Route path="/all-past-matches" element={<AllPastMatches />} />
          <Route path="/" element={<FutureMatches />} />
          <Route path="/all-future-matches" element={<AllFutureMatches />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
