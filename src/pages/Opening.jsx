import React, { useState, useEffect } from "react";

function Opening() {
  const [cursor, setCursor] = useState(false);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input === ".run") {
        window.location.href = "/About";
      }
    }
  };

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="inline-block bg-transparent outline-none caret-transparent"
        />
      </label>
    </div>
  );
}

export default Opening;