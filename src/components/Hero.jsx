import React from "react";
import { heroIcons } from "../constant/data";
import Button from "./Button";
import { BackgroundGradient } from "./ui/BackgroundGradient ";

//motion
import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV.pdf"; 
  link.download = "CV.pdf";
  link.click();
};

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40" id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container flex flex-col items-center"
      >
        {/* image */}
        <motion.div variants={fadeIn}>
          <BackgroundGradient className="w-70 h-54 lg:w-80 lg:h-80 rounded-full bg-zinc-900">
            <figure className="rounded-full overflow-hidden">
              <img
                src="/images/hero-imag.png"
                alt="hero img"
                width={452}
                height={452}
              />
            </figure>
          </BackgroundGradient>
        </motion.div>

        {/* content  */}
        <div className="text-center mt-8">
          <motion.h1
            variants={fadeInUp}
            className="text-3xl lg:text-5xl mb-1 font-bold"
          >
            {" "}
            Hi, I'm Kavindu Abeywickrama{" "}
          </motion.h1>
          <motion.h2 variants={fadeInUp}> Software Engineer </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-[820px] mx-auto mt-4 mb-6">
            A software engineering graduate, and a highly motivated and
            dedicated individual with a passion for coding and technology. I
            thrive in challenging situations and enjoy tackling complex coding
            challenges. Always looking for exciting opportunities to improve my
            knowledge and skills to make a positive impact on society through
            innovative software applications.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-5">
            {heroIcons.map((icon) => (
              <a
                href="#"
                target="_blank"
                className="hover:text-indigo-400 transition-colors"
              >
                <icon.icon size={30} />
              </a>
            ))}
          </motion.div>
          {/* btn wrapper */}
          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center flex-wrap gap-5">
            <Button label="Download CV" classes="primary-btn" icon onClick={handleDownloadCV} />
            <Button label="Let's Talk" classes="secondary-btn" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
