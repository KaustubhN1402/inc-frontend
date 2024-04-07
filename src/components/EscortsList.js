import { useState, useEffect } from "react";
import "./EscortList.css";
function EscortsList() {
  const [escorts, setEscorts] = useState([]);
  useEffect(() => {
    // http://localhost:8080/escorts
    fetch("escorts.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEscorts(data);
      });
  }, []);
  return (
    <div className="main">
      <div className="card-container">
        {escorts.map((escort) => {
          return (
            <div className="card">
              <p>ID: {escort.escortId}</p>
              <p>Name: {escort.name}</p>
              <p>Contact Number: {escort.contactNumber}</p>
              <p>Allocated Judge: {escort.judgeId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EscortsList;
