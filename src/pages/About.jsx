import React from "react";

function About() {
  return (
    <section className="bg-[#FFFBE9] min-h-screen w-full py-20 px-10 md:px-24">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <h1 className="text-[#AD8B73] text-6xl md:text-7xl font-bold leading-tight">
          I'm Reem <br /> Alkhalily!
        </h1>

        <div className="h-40 w-3 bg-[#E3CAA5] md:mx-10"></div>

        <h2 className="text-[#AD8B73] text-4xl md:text-5xl font-semibold leading-tight">
          Software Developer
        </h2>
      </div>

      <h3 className="text-[#AD8B73] text-4xl md:text-5xl font-bold mt-24">
        &gt; About Me
      </h3>

      <p className="text-[#C49673] text-2xl md:text-4xl mt-10  max-w-4xl leading-relaxed">
        Hello! :D just a Houston native currently living in Dallas. I’m a
        software developer who loves building clean, thoughtful experiences with
        powerful tech behind them. Outside of coding, I’m usually exploring
        coffee shops, playing games, or hanging out with my kitten, Blink. I’m
        also a huge space nerd (a sucker for space podcasts) and love meeting
        new people, learning new things, and discovering anything that sparks
        curiosity!
      </p>
    </section>
  );
}

export default About;
