import { useState, useEffect } from "react";
import "./GetJudgeFromTeamID.css";
import logo from "../logo.png" ;

function SelectedJudgesList() {
  const [judges, setJudges] = useState([]);
  useEffect(() => {
    // http://localhost:8080/escorts
    fetch("judges.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJudges(data);
      });
  }, []);
  return (
    <div className="main">
        <div className="card-container">
        {judges.map((judge) => {
        return (
          <div className="card">
            <p>ID: {judge.judgeId}</p>
            <p>Name: {judge.name}</p>
            <p>Contact Number: {judge.contactNumber}</p>
            <p>Domain: {judge.domain}</p>
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
      <img src={logo} alt="" className="logo"/>
      <input
        className="input1"
        type="number"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Search by team ID ..."
      ></input>
      <button onClick={buttonOnClick} id="b2">Search</button>
      
      {showComponent && <SelectedJudgesList />}

    </div>
  );
}

function GetJudgeFromTeamID() {
  return <SearchBox />;
}

export default GetJudgeFromTeamID;
