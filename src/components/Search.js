import React from "react";
import { Link } from "react-router-dom";
//import EscortsList from "./EscortsList";

function Search() {
  return (
    <div className="main">
      <ul>
        <li>
          <Link to="/escorts">
            <button type="button">click here</button>
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
      </ul>
    </div>
  );
}

export default Search;
