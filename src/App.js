// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
//import Contact from "./components/Contact";
import Bottombar from "./components/Bottombar" ;
import Search from "./components/Search"
//import RegisterForm from "./components/Register"
import EscortsList from "./components/EscortsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/home" element={<Home />} />
            <Route path="/escorts" element={ <EscortsList /> } />
          </Routes>
          <Bottombar/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
