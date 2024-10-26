import React from "react";

function Experience() {
  return (
    <div className="bg-[#FFFBE9] py-2 w-screen">
      <h2 className="text-[#AD8B73] text-6xl pt-24 pl-24">
        &gt; Work Experience
      </h2>
      <ul className="text-[#C49673] text-4xl pl-32 pt-12">
        <li>
          Software Engineer Intern - NASA <br />
          <span className="text-[#E4B567]">May 2024 - Present</span>
          <br />
          Developed a Python-based automation tool for network configuration,
          <br></br>
          reducing processing time by 30%. Designed a relational database using
          <br></br>
          SQLite to enhance data access, and utilized Pandas and Polars for
          efficient <br></br>data analysis, generating visual insights from
          network data.
        </li>
        <br></br>
        <li>
          Teaching Assistant - University of Houston<br></br>
          <span className="text-[#E4B567]">January 2024 - Present</span>
          <br></br>
          Led lab sessions for 120 students, reinforcing programming concepts
          and <br></br>providing personalized assistance. Managed TA duties
          alongside <br></br>coursework, dedicating 5 hours weekly to support an
          introductory <br></br>programming course.
        </li>
      </ul>
    </div>
  );
}

export default Experience;
