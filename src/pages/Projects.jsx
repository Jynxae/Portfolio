import React from "react";
import Museum from "../Images/Museum.jpg"; // Import your image file

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-3 bg-white">
      <div className="bg-gray-200 rounded-3xl px-3 py-1 mt-3">Projects</div>
      <p className="mt-3">Here are some stuff I've worked on in the past</p>
      <div className="grid grid-cols-2 gap-x-24 mt-9 ml-32">
        <div className="row-span-2">
          <img
            src={Museum}
            alt="Databases Project for COSC 3380"
            className="w-full h-96 rightrounded-lg"
          />
        </div>
        <div>
          <h1 className="font-bold">The Baker Museum</h1>
          <p className="mt-6 mr-6">
            This project was an engaging endeavor undertaken with my peers. We
            developed a comprehensive full-stack website complete with a
            relational database, catering to the hypothetical needs of a museum.
            The website featured essential functionalities such as ticket
            booking, exhibit management, gift shop inventory, checkout, and user
            profile management. Users were assigned different roles (customer,
            employee, admin), each with specific permissions tailored to their
            responsibilities. Tools/Languages we used are listed below.
          </p>
        </div>
        <div className="grid grid-cols-5">
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-20 h-10">
            React
          </div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-24 h-10">
            Tailwind
          </div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-24 h-10">
            Three.js
          </div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-24 h-10">
            Node.js
          </div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-24 h-10">
            MySQL
          </div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-16 h-10">JWT</div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-20 h-10">
            Azure
          </div>
          <div className="bg-gray-200 rounded-3xl pl-4 pt-2 w-36 h-10">
            Vercel/Render
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
