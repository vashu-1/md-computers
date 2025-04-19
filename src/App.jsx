import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Home/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";

import Footer from "./Components/Home/Footer";
import Login from "./pages/login";
import Signup from "./pages/signup";

import Header from "./Components/Home/Header";
import Products from "./Components/Home/Products";
import ContactUs from "./Components/Home/ContactInfo";
import MackbookPlus from "./Components/Home/MackbookPlus";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Banner />
      <Products/>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <MackbookPlus/>
      <ContactUs/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
