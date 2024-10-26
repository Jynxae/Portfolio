import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Rocket from "./Images/Rocket.png";
import resume from "./Images/Alkhalily_Reem.pdf";

function Layout() {
  const [showRocket, setShowRocket] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/main") {
      setShowRocket(true);
    } else {
      setShowRocket(false);
    }
  }, [location.pathname]);

  return (
    <div>
      {location.pathname === "/main" && (
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-4 right-4 bg-[#AD8B73] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#CEAB93] transition duration-300"
        >
          View Resume
        </a>
      )}

      {showRocket && (
        <div className={`fixed bottom-4 right-36 rocket-enter`}>
          <img src={Rocket} alt="Rocket" className="w-36 h-48" />
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default Layout;
