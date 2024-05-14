import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex">
        <li className="mr-6">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
