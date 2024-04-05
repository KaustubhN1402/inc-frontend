import React from "react";
import logo from "../logo.png";
import "./Home.css";



function Home() {
  return (
    <div className="main">
      
      <div className="logo">
        <img src={logo} alt="inclogo" />
      </div>

      <p id="headtext">PICT INC 2K24</p>
      <br />

      <div className="project-info">
        <p id = "head">About Us</p>
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
          International Coding Competition. Students are invited with projects
          addressing the societal needs like Health, Agriculture, Kids/Women
          Safety, Education, etc. and the best project judged by the juries will
          be awarded with a cash prize of ₹ 1 Lakh Cash Prize from PICT.
        </p>
      </div>

      
    </div>
  );
}

export default Home;
