import React from "react";

function About() {
  return (
    <div className="bg-[#FFFBE9] py-2 w-screen">
      <h1 className="text-[#AD8B73] text-7xl pt-24 pl-24">
        I'm Reem <br></br>Alkhalily!
      </h1>
      <div className="absolute h-48 w-5 bg-[#E3CAA5] left-96 top-20 ml-3"></div>
      <h1 className="absolute text-[#AD8B73] text-7xl left-1/3 top-28">
        CS @ University of <br></br>Houston
      </h1>

      <h2 className="text-[#AD8B73] text-6xl pt-24 pl-24">&gt; About Me</h2>
      <p className="text-[#C49673] text-4xl pl-32 pt-12">
        Hey! I’m Reem Alkhalily, a senior at the University of <br></br>Houston
        studying Computer Science with a minor in<br></br> Mathematics. I’m a
        huge foodie, mother of two cats, <br></br>and aerospace fan!
      </p>
    </div>
  );
}

export default About;
