import { useState, useEffect } from "react";
import "./JudgeList.css";

function JudgesList() {
  const [judges, setJudges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/judges")
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

export default JudgesList;
