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
//import Bottombar from "./components/Bottombar" ;
import Search from "./components/Search"
//import RegisterForm from "./components/Register"
import EscortsList from "./components/EscortsList";
import JudgesList from "./components/JudgesList" ; 
import TeamsList from "./components/TeamsList";

import "./App.css";
import GetJudgeFromTeamID from "./components/GetJudgeFromTeamID";
import GetTeamFromJudgeID from "./components/GetTeamFromJudgeID";

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
            <Route path="/judges" element={ <JudgesList /> } />
            <Route path="/teams" element={ <TeamsList /> } />
            <Route path="/judge-from-team-id" element={ <GetJudgeFromTeamID /> } />
            <Route path="/team-from-judge-id" element={ <GetTeamFromJudgeID /> } />
          </Routes>
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;
