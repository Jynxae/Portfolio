import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Rocket from "./Images/Rocket.png";

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
