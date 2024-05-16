import React from "react";
import Museum from "../Images/Museum.jpg"; // Import your image file

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-3 bg-white">
      <div className="bg-gray-200 rounded-3xl px-3 py-1 mt-3">Projects</div>
      <p className="mt-3">Here are some stuff I've worked on in the past</p>
      <div className="grid grid-cols-2 bg-neutral-300 gap-12 mt-9 ml-12">
        <div>
          <img
            src={Museum}
            alt="Databases Project for COSC 3380"
            className="w-full h-96 rightrounded-lg"
          />
        </div>
        <div>description</div>
        <div>skills</div>
      </div>
    </div>
  );
}

export default Projects;
