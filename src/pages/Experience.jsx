import React from "react";

function Experience() {
  return (
    <div className="bg-[#FFFBE9] h-screen w-screen">
      <h2 className="text-[#AD8B73] text-6xl pt-24 pl-24">
        &gt; Work Experience
      </h2>
      <ul className="text-[#CEAB93] text-4xl pl-24">
        <li>
          Software Engineer Intern - NASA <br />
          <span className="text-[#E3CAA5]">May 2024 - Present</span>
          <br />
          I’m assisting the JSL network team to develop a program to streamline
          <br></br> the process of a network configuration tool to minimize
          human error using <br></br>SQLite, Python, and React. Additionally, I
          am currently creating an internal <br></br>application to analyze data
          given by Wireshark to calculate data using <br></br>Pandas, SQLite,
          and pyQT.
        </li>
        <br></br>
        <li>
          Academic Support Assistance - University of Houston<br></br>
          <span className="text-[#E3CAA5]">January 2024 - Present</span>
          <br></br>Supported over 240+ students by leading weekly labs teaching
          the <br></br>fundamentals of C++ programming in addition to providing
          <br></br> individualized feedback and one-on-one assistance.
        </li>
      </ul>
    </div>
  );
}

export default Experience;
