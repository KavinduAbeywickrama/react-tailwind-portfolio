import React, { useState } from "react";
import { contactItems } from "../constant/data";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiMediumFill,
} from "@remixicon/react";

// motion
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzOIp4whK_UySjLe7pabkxGvwc567o1jRXhf5F8uOPmItEAbDz124q2sucS4CDKVbiG/exec";

  const [status, setStatus] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then(() => {
        setStatus("✅ Submission successful!");
        form.reset(); // clear form inputs
        setTimeout(() => setStatus(""), 1500); 
      })
      .catch(() => {
        setStatus("❌ Something went wrong. Please try again.");
        setTimeout(() => setStatus(""), 1500);
      });
  };

  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800"
      >
        {/* Content */}
        <div>
          <motion.h2 variants={fadeInUp}>Get In Touch</motion.h2>
          <motion.p variants={fadeInUp} className="mt-3.5 mb-7">
            Ready to work on your next project. Let's discuss how I can help
            bring your ideas to life.
          </motion.p>

          {/* Contact List */}
          <motion.ul variants={fadeInUp}>
            {contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300 transition-colors"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Social Profiles */}
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 mt-6"
          >
            <a
              href="https://www.linkedin.com/in/k-abeywickrama/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              <RiLinkedinBoxFill size={30} />
            </a>
            <a
              href="https://github.com/KavinduAbeywickrama"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              <RiGithubFill size={30} />
            </a>
            <a
              href="https://medium.com/@agckavindu/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              <RiMediumFill size={30} />
            </a>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="grid gap-5"
          name="submit-to-google-sheet"
        >
          {/* Name */}
          <div className="grid gap-2">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              name="Name"
              placeholder="Your Name"
              className="input"
              required
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="Email"
              placeholder="Your Email"
              className="input"
              required
            />
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="Message"
              placeholder="Message"
              className="h-40 border border-neutral-800 indent-4 py-2 resize-none"
              required
            />
          </div>

          <button type="submit" className="primary-btn max-w-max">
            Send Message
          </button>

          {/* Status message */}
          {status && (
            <p className="text-sm mt-2 text-green-400 font-medium">{status}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
