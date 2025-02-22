import { motion } from "framer-motion";
import React from "react";
import Animate from "../components/Animate";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center relative min-h-screen md:p-6 p-4  bg-white text-black dark:bg-gray-900 dark:text-white">
      <Animate>
        <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-wide md:p-4">
          About Me
        </h2>
      </Animate>

      <div className="flex flex-col-reverse gap-8 md:mt-3 lg:flex-row items-center justify-center text-center md:px-8 w-full max-w-6xl">
        <div className="flex-1 px-4">
          <Animate>
            <p className="text-lg md:text-xl leading-relaxed max-w-[700px] mx-auto text-gray-700 dark:text-gray-300">
              Hi, I'm Akshat Tandon, a passionate web developer and final-year
              BCA student at Anand Engineering College. My journey into web
              development is driven by curiosity and a strong desire to build
              seamless, user-friendly web applications using the MERN stack.
              Proficient in JavaScript, React, and backend technologies like
              Node.js and Express. I am continuously improving my skills in both
              web development and problem-solving through Java. I am excited to
              take on new challenges and learn continuously. Let's connect and
              build something meaningful together!
            </p>
          </Animate>
        </div>

        <div className="flex-1 flex justify-center">
          <Animate>
            <motion.img
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              alt="Akshat Tandon"
              loading="lazy"
              decoding="async"
              className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer object-cover w-[250px] sm:w-[300px] md:w-[350px] max-w-full"
              src="https://avatars.githubusercontent.com/akshattnd"
            />
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default About;
