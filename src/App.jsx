import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
<<<<<<< HEAD

import Footer from "./Components/footer";
import Login from "./pages/login";
import Signup from "./pages/signup";

=======
import Login from "./Components/Login";
import Header from "./Components/Header";
>>>>>>> 0b1a0511cd1e8c0653face41faa3308960d63829
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
