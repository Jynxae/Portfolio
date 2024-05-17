import React from "react";
import Museum from "../Images/Museum.jpg"; // Import your image file

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-3 bg-white">
      <div className="bg-gray-200 rounded-3xl px-3 py-1 mt-3">Projects</div>
      <p className="mt-3">Here are some stuff I've worked on in the past</p>
      <div className="grid grid-cols-2 gap-24 mt-9 ml-32  ">
        <div>
          <img
            src={Museum}
            alt="Databases Project for COSC 3380"
            className="w-full h-96 rightrounded-lg"
          />
        </div>
        <div>
          <h1 className="font-bold">The Baker Museum</h1>
          <p className="mt-6">
            This was a fun project I enjoyed working on with my friends. In this
            project, we created a fullstack site using many tools such as Node,
            mySQL workbench, Postman, Azure, Render, and Vercel.
          </p>
        </div>
        <div>skills</div>
      </div>
    </div>
  );
}

export default Projects;
