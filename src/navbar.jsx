import React from "react";
import myCV from "./Alkhalily_Reem.pdf"; // Import the PDF file

function Navbar() {
  return (
    <nav className="bg-white-800">
      <ul className="flex justify-end pr-60 pt-6 text-lg font-medium">
        <li className="mr-6 relative">
          <a href="#" className="text-black-600 group">
            <span>About</span>
            <span className="absolute bottom-0 left-0 bg-black h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="mr-6 relative">
          <a href="#" className="text-black-600 group">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 bg-black h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="mr-6 relative">
          <a href="#" className="text-black-600 group">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 bg-black h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="mr-6 relative">
          <a
            href={myCV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black-600 group"
          >
            <span>Download my CV</span>
            <span className="absolute bottom-0 left-0 bg-black h-0.5 w-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
