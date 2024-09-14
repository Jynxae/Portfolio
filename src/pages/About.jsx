import React from "react";
import gojopic from "../Images/gojo.jpg";

function About() {
  return (
    <div className="flex justify-end mt-12 py-12 bg-gray-100 relative">
      <div className="absolute top-3 left-2/4 bg-gray-200 rounded-3xl px-3 py-1 mt-3">
        About Me
      </div>
      <div className="flex flex-row justify-between pr-12 mt-3 w-full">
        <div className="ml-52 mt-12">
          <img
            src={gojopic}
            alt="Picture of me with gojo"
            className="w-full h-96 rounded-lg shadow-2xl"
          />
        </div>
        {/* Keep the heading and paragraph on the right */}
        <div className="flex flex-col justify-end ml-96">
          <h1 className="text-3xl">Here's some more about me :D</h1>
          <p className="mt-3">
            I'm deeply involved in campus life at UH! Currently, I serve as the
            President of Computer Science Girls, a club dedicated to supporting
            women and underrepresented minorities in STEM. I love helping my
            peers grow professionally and form lasting friendships. At my
            internship, I work with the JSL network engineering team to maintain
            the connection between the ISS and ground stations, automating
            processes to reduce human error and make astronauts' work easier.
            Outside of school and work, you'll likely find me exploring coffee
            shops around Houston, rating them on weekends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
