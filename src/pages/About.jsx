import React from "react";
import gojopic from "../Images/gojo.jpg";

function About() {
  return (
    <div className="flex justify-end mt-12 py-12 bg-gray-100 relative">
      <div className="absolute top-3 left-2/4 bg-gray-200 rounded-3xl px-3 py-1 mt-3">
        About Me
      </div>
      <div className="flex flex-row justify-between pr-12 mt-3 w-full">
        <div className="ml-52 mt-12">
          <img
            src={gojopic}
            alt="Picture of me with gojo"
            className="w-full h-96 rounded-lg shadow-2xl"
          />
        </div>
        {/* Keep the heading and paragraph on the right */}
        <div className="flex flex-col justify-end">
          <h1 className="text-3xl">Here's some more about me :D</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            numquam quibusdam <br></br>voluptas excepturi aut error architecto
            autem, eligendi nobis nam earum quidem <br></br>mollitia dolorum
            commodi asperiores nisi minima facilis quo. Lorem, ipsum dolor sit
            amet <br></br>consectetur adipisicing elit.<br></br>
            <br></br>Ut dolorem quam nam debitis, <br></br> amet animi
            blanditiis quis saepe distinctio possimus eius molestias
            exercitationem <br></br>quisquam suscipit eveniet perspiciatis.
            Ducimus voluptatum excepturi<br></br> explicabo, culpa, obcaecati,
            laudantium odio facere nostrum odit quisquam <br></br>iste. Dolore
            ad libero officia excepturi provident iusto in quas fuga<br></br>{" "}
            asperiores, modi velit dicta alias magnam nulla quaerat<br></br> non
            quam incidunt accusamus ex facere perspiciatis <br></br>odio iste
            eaque voluptate.<br></br> <br></br>Nobis sequi eum minima! Sequi
            cupiditate <br></br> hic, voluptas quo modi similique perferendis
            labore neque<br></br> quisquam possimus distinctio mollitia vero aut{" "}
            <br></br>incidunt temporibus inventore maiores nulla eaque accusamus
            <br></br> pariatur quae voluptatum. Suscipit!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
