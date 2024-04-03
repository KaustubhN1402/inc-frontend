// src/components/Register.js
import React from "react";
import "./Register.css";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    teamMembers: "", // Initialize with an empty string
    competitionName: "", // Initialize with an empty string
    experienceLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the data to a server
    console.log(formData);
  };

  return (
    <div className="main">
      <h1>Registration Form</h1>
      <div className="contentform">
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="teamMembers">Team Members:</label>
            <select
              id="teamMembers"
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="event">Event:</label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="concept">CONCEPTS</option>
              <option value="impetus">IMPETUS</option>
              <option value="pradnya">PRADNYA</option>
            </select>
          </div>
          <div></div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
