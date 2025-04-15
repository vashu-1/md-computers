import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter></BrowserRouter>
    </>
  );
}

export default App;
