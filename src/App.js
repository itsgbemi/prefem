import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import SOS from "./pages/SOS";
import Call from "./pages/Call";
import Hub from "./pages/Hub";
import "./styles/global.css";

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/sos" element={<SOS />} />
                    <Route path="/call" element={<Call />} />
                    <Route path="/hub" element={<Hub />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
