import React from "react";
import { FaLocationDot } from "react-icons/fa6";

function Home() {
  return (
    <div className="pl-32">
      <h1 className="flex text-7xl font-light pt-40">Hey, I'm Reem!</h1>
      <p className="text-lg pt-9">
        I'm a Software Engineer intern at Boeing starting Summer 2024! <br></br>
        I'm entering my senior year at the University of Houston as a Computer
        Science major<br></br> with a minor in Mathematics.
      </p>
      <div className=" flex pt-3 text-lg">
        <FaLocationDot /> Houston, TX
      </div>
    </div>
  );
}

export default Home;
