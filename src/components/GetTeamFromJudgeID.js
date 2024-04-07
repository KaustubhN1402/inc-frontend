import { useState, useEffect } from "react";
import logo from "../logo.png" ; 

function SelectedTeamsList() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    // http://localhost:8080/escorts
    fetch("teams.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTeams(data);
      });
  }, []);
  return (
    <div className="main">
        <div className="card-container">
        {teams.map((team) => {
        return (
          <div className="card">
            <p>ID: {team.teamId}</p>
              <p>Name: {team.name}</p>
              <p>Abstract: {team.abstract}</p>
              <p>Domain: {team.domain}</p>
              <p>project Type: {team.projectType}</p>
              <p>Block No: {team.roomNumber}</p>
              <p>Institute: {team.instituteName}</p>
          </div>
        );
      })}
        </div>
    </div>
  );
}

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const buttonOnClick = () => {
    setShowComponent(true);
  };
  return (
    <div className="main-">
      <img src={logo} alt="" className="logo" />
      <input
        className="input1"
        type="number"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Search by judge ID ..."
      ></input>
      <button onClick={buttonOnClick} id="b2">Search</button>
      {showComponent && <SelectedTeamsList />}
    </div>
  );
}

function GetTeamFromJudgeID() {
  return <SearchBox />;
}

export default GetTeamFromJudgeID;
