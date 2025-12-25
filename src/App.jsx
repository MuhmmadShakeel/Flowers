import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Shop from "./Pages/Shop";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
