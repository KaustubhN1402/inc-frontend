// src/components/About.js
import React from "react";
import "./About.css";
import logo from "../conceptlogo.png";
import logos from "../impetuslogo.png";
import logoss from "../pradnyalogo.png";

function About() {
  return (
    <div className="main">
      <div className="about-info">
        <h2 id="head">About Us</h2>
        <p>
          Impetus and Concepts (InC) is a flagship technical event of SCTR's
          Pune Institute of Computer Technology (PICT), Pune , which will be
          held during the 1st week of April 2024. InC is an intercollegiate
          international level competition that has been catching the attention
          of corporate giants for the quality of projects and an opportunity to
          recruit/mentor young talented budding entrepreneurs. Every year InC
          sets a new benchmark and provides an opportunity for students to
          realize their ideas into effective products. Over the years, it has
          become the most popular and awaited event with continuous improvement
          in footfall, the number and quality of projects/papers, etc. This
          event also sets a platform for students to design, exhibit, and watch
          their ideas come true. This technical fest has inventive events namely
          - Impetus, Concepts, Pradnya. Impetus is a Project Competition for FE
          to TE students, all engineering branches confined to specific domains
          ; Concepts is a Project Competition for Final Year Students, all
          engineering branches confined to specific domains ; and Pradnya - An
          International Coding Competition.Students are invited with projects
          addressing the societal needs like Health, Agriculture, Kids/Women
          Safety, Education, etc. and the best project judged by the juries will
          be awarded with a cash prize of ₹ 1 Lakh Cash Prize from PICT.
        </p>
      </div>
      <div className="wel">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="concepts">
          {/* <br /> */}

          <p id="headconcept">CONCEPTS</p>
          <div className="hello">
            <p id="concept">TEAM : 2 to 5 members</p>
            <p id="concept">CRITERIA : final year students only</p>
            <p id="concept">FEES : 1000 INR</p>
            <p id="concept">DEADLINE : 31/04/2024</p>
          </div>
        </div>
      </div>

      <div className="wel">
        <div>
          <img src={logos} alt="logos" />
        </div>
        <div className="concepts">
          {/* <br /> */}

          <p id="headconcept">CONCEPTS</p>
          <div className="hello">
            <p id="concept">TEAM : 2 to 5 members</p>
            <p id="concept">CRITERIA : final year students only</p>
            <p id="concept">FEES : 1000 INR</p>
            <p id="concept">DEADLINE : 31/04/2024</p>
          </div>
        </div>
      </div>

      <div className="wel">
        <div>
          <img src={logoss} alt="logoss" />
        </div>
        <div className="concepts">
          {/* <br /> */}

          <p id="headconcept">CONCEPTS</p>
          <div className="hello">
            <p id="concept">TEAM : 2 to 5 members</p>
            <p id="concept">CRITERIA : final year students only</p>
            <p id="concept">FEES : 1000 INR</p>
            <p id="concept">DEADLINE : 31/04/2024</p>
          </div>
        </div>
      </div>




    </div>
  );
}

export default About;
