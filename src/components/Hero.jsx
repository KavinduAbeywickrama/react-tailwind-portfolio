import React from "react";
import { heroIcons } from "../constant/data";
import Button from "./Button";
import { BackgroundGradient } from "./ui/BackgroundGradient ";

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40">
      <div className="container flex flex-col items-center">
        {/* image */}
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
        {/* content  */}
        <div className="text-center mt-8">
          <h1 className="text-3xl lg:text-5xl mb-1 font-bold">
            {" "}
            Hi, I'm Kavindu Abeywickrama{" "}
          </h1>
          <h2> Software Engineer </h2>
          <p className="max-w-[820px] mx-auto mt-4 mb-6">
            A software engineering graduate, and a highly motivated and
            dedicated individual with a passion for coding and technology. I
            thrive in challenging situations and enjoy tackling complex coding
            challenges. Always looking for exciting opportunities to improve my
            knowledge and skills to make a positive impact on society through
            innovative software applications.
          </p>

          <div className="flex items-center justify-center gap-5">
            {heroIcons.map((icon) => (
              <a
                href="#"
                target="_blank"
                className="hover:text-indigo-400 transition-colors"
              >
                <icon.icon size={30} />
              </a>
            ))}
          </div>
          {/* btn wrapper */}
          <div className="mt-10 flex items-center justify-center flex-wrap gap-5">
            <Button label="Download CV" classes="primary-btn" icon />
            <Button label="Let's Talk" classes="secondary-btn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
