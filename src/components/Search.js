import React from "react";
import { Link } from "react-router-dom";
import "./Search.css" ; 
//import EscortsList from "./EscortsList";

function Search() {
  return (
    <div className="main-">
      <ul>
        <li>
          <Link to="/escorts">
            <button type="button">Escorts</button>
          </Link>
        </li>
        <li>
          <Link to="/judges">
            <button>Judges</button>
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <button>Teams</button>
          </Link>
        </li>
        <li>
          <Link to="/judge-from-team-id">
            <button>Search judges for team ID</button>
          </Link>
        </li>
        <li>
          <Link to="/team-from-judge-id">
            <button>Search teams allocated to judge ID</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Search;
