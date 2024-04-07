import { useState, useEffect } from "react";
import "./TeamList.css";

function TeamsList() {
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

export default TeamsList;
