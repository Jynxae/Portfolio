import React, { useState, useEffect } from "react";

function Home() {
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prevCursor) => !prevCursor);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-[#FFFBE9] h-screen w-screen text-7xl pl-12 pt-12">
      <h1 className="text-[#AD8B73]">&gt; Hey! Curious to see my website?</h1>
      <h1 className="text-[#AD8B73]">&gt; Please type “.run” to open it.</h1>
      <label className="text-[#AD8B73]">
        &gt;
        <span className="inline-block">{cursor ? "|" : " "}</span>
        <input
          type="text"
          name="command"
          className="inline-block bg-transparent outline-none caret-transparent"
        />
      </label>
    </div>
  );
}

export default Home;
