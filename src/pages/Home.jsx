import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import profileImage from "../Images/pfp.jpg"; // Import your profile image

function Home() {
  return (
    <div className="pl-32 flex">
      <div className="flex flex-col">
        <h1 className="text-7xl font-light pt-40">Hey, I'm Reem!</h1>
        <p className="text-lg pt-9">
          I'm a Software Engineer intern at Boeing starting Summer 2024!{" "}
          <br></br>
          I'm entering my senior year at the University of Houston as a Computer
          Science major<br></br> with a minor in Mathematics.
        </p>
        <div className="flex pt-3 text-lg">
          <FaLocationDot /> Houston, TX
        </div>
      </div>
      <div className="h-72 w-72 rounded-full overflow-hidden ml-36 mt-28">
        <img
          src={profileImage}
          alt="This is me! Reem Alkhaliy"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Home;
