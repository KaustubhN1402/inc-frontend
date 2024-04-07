import React from "react";
import { Link } from "react-router-dom";
import "./Search.css" ; 
//import EscortsList from "./EscortsList";

function Search() {
  return (
    <div className="main">
      <ul>
        <li>
          <Link to="/escorts">
            <button type="button" id="b1">Escorts</button>
          </Link>
        </li>
        <li>
          <Link to="/judges">
            <button id ="b1">Judges</button>
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <button id="b1">Teams</button>
          </Link>
        </li>
        <li>
          <Link to="/judge-from-team-id">
            <button id ="b1">Search judges for team ID</button>
          </Link>
        </li>
        <li>
          <Link to="/team-from-judge-id">
            <button id="b1">Search teams allocated to judge ID</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Search;
