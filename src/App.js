import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Report from "./pages/Report";
import SOS from "./pages/SOS";
import Call from "./pages/Call";
import Hub from "./pages/Hub";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/call" element={<Call />} />
        <Route path="/hub" element={<Hub />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  
