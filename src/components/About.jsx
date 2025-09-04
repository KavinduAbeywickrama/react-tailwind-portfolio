import React from "react";
import { aboutItems } from "../constant/data";

//motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp} >About me</motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 mb-9">
          A software engineering graduate, and a highly motivated and dedicated
          individual with a passion for coding and technology. I thrive in
          challenging situations and enjoy tackling complex coding challenges.
          Always looking for exciting opportunities to improve my knowledge and
          skills to make a positive impact on society through innovative
          software applications.
        </motion.p>

        {/* skills */}

        <div>
          <motion.p variants={fadeInUp} className="text-white font-semibold text-xl mb-3"> Skills:</motion.p>
          <motion.ul variants={fadeInUp}>
            {aboutItems.map((item) => (
              <li key={item.id}>
                <p> ✔️ {item.label} </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
