import { motion } from "framer-motion";
import React from "react";
import Animate from "../components/Animate";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center md:px-4 px-2 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Animate>
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Hi, I'm Akshat Tandon
        </h2>
      </Animate>
      <Animate>
        <p className="text-lg md:text-xl mb-6 inline-block mx-auto w-[80%] md:w-[50%] text-gray-700 dark:text-gray-300">
          Passionate <span className="text-[#6D28D9]">Web Developer</span> with
          a strong desire to create meaningful and innovative web applications.
          While I may be relatively new to the field, my enthusiasm for coding
          and continuous learning drives me to excel in every project I
          undertake.
        </p>
      </Animate>
      <Animate>
        <div className="flex justify-center space-x-6 mx-auto my-4">
          <a
            href="https://github.com/akshattnd"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-yellow-300 text-white "
          >
            <motion.svg
              whileHover={{ scale: 1.25, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-stroke=""
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </motion.svg>
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-tandon-a29190242/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-yellow-300 text-white"
          >
            <motion.svg
              whileHover={{ scale: 1.25, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-stroke=""
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </motion.svg>
          </a>
        </div>
      </Animate>
      <Animate>
        <motion.a
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          target="_blank"
          href="https://drive.google.com/file/d/1MSeWbSkp3Quxr6PXBnWN8YHCAk1I9dv7/view?usp=drive_link"
          whileHover={{
            scale: 1.1,
          }}
          type="button"
          className="m-2 p-4 font-semibold flex gap-1.5 items-center border-3 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white dark:bg-gray-800 dark:text-purple-300 dark:hover:bg-purple-700 dark:hover:text-white transition-colors duration-300"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className="relative top-1"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
          </svg>
          Get Resume
        </motion.a>
      </Animate>
    </div>
  );
}
