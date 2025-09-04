import React from "react";
import { aboutItems } from "../constant/data";

const About = () => {
  return (
    <section className="section bg-secondary-clr">
      <div className="container">
        <h2>About me</h2>
        <p className="mt-3 mb-9">
          A software engineering graduate, and a highly motivated and dedicated
          individual with a passion for coding and technology. I thrive in
          challenging situations and enjoy tackling complex coding challenges.
          Always looking for exciting opportunities to improve my knowledge and
          skills to make a positive impact on society through innovative
          software applications.
        </p>
        {/* skills */}
      </div>
      <div>
        <p className="text-white font-semibold text-xl"> Skills:</p>
        <ul className="">
          {aboutItems.map((item) => (
            <li key={item.id}>
              <p> ✔️ {item.label} </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
