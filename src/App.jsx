import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Tyres from "./pages/Tyres";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/tyres" element={<Tyres />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;