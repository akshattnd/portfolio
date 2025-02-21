import React from "react";
import ProjectAnimation from "../components/ProjectAnimation";
import { motion } from "framer-motion";
import Animate from "../components/Animate";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-fill md:p-4 p-2 ">
      <Animate>
        <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white tracking-wide  md:p-4">
          Projects
        </h2>
      </Animate>
      <div className="flex flex-wrap gap-6 md:gap-14  w-[90%] md:w-[60%] mx-auto justify-center align-center p-4">
        <ProjectAnimation>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl border-white border-2 max-h-fit ">
            <img
              className="object-fill mx-auto "
              src="/sortingVisualizer.png"
              alt="Sorting Visualizer"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Sorting Visualizer</div>
              <p className="text-white text-base">
                web app built with JavaScript and React, featuring animations to
                visually demonstrate sorting algorithms like Bubble Sort, Quick
                Sort, and Merge Sort. Users can adjust sorting speed and array
                size to better understand the algorithm's efficiency.
              </p>
            </div>
            <div className="px-6 ">
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className=" inline-block  px-3 py-1 mx-2 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://github.com/akshattnd/Sorting-algorithm-visualizer"
              >
                Code
              </motion.a>
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className="mx-2 inline-block  px-3 py-1 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://akshattnd.github.io/Sorting-algorithm-visualizer/"
              >
                Live
              </motion.a>
            </div>
          </div>
        </ProjectAnimation>
        <ProjectAnimation>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl border-white border-2 ">
            <img
              className="object-fill mx-auto "
              loading="lazy"
              src="/todo.png"
              alt="Todo App"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Todo App</div>
              <p className="text-white text-base">
                A task management application built using React with Context API
                for state management and Local Storage for data persistence.
                Users can add, edit, and delete tasks with a clean and
                responsive UI for easy usability.
              </p>
            </div>
            <div className="px-6">
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className=" inline-block  px-3 py-1 mx-2 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://github.com/akshattnd/todoApp"
              >
                Code
              </motion.a>
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className="mx-2 inline-block  px-3 py-1 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://akshattnd.github.io/todoApp/"
              >
                Live
              </motion.a>
            </div>
          </div>
        </ProjectAnimation>
        <ProjectAnimation>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl border-white border-2 ">
            <img
              loading="lazy"
              className="object-fill mx-auto "
              src="/weather.png"
              alt="weather Api"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Weather App</div>
              <p className="text-white text-base">
                A weather application that fetches real-time weather data using
                a weather API. It includes React paginators for smooth
                navigation and displays temperature, humidity, and forecasts
                with a clean and visually appealing UI.
              </p>
            </div>
            <div className="px-6  ">
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className=" inline-block  px-3 py-1 mx-2 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://github.com/akshattnd/weatherApp"
              >
                Code
              </motion.a>
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className="mx-2 inline-block  px-3 py-1 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://akshattnd.github.io/weatherApp/"
              >
                Live
              </motion.a>
            </div>
          </div>
        </ProjectAnimation>
        <ProjectAnimation>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl border-white border-2 ">
            <img
              className="object-fill mx-auto "
              loading="lazy"
              src="/thread.png"
              alt="Thread clone"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Thread Clone</div>
              <p className="text-white text-base">
                A social media clone built using the MERN stack with TypeScript
                and Redux for better state management. It allows users to post,
                comment, and interact with content, featuring authentication, a
                database for persistent storage, and a responsive UI.
              </p>
            </div>
            <div className="px-6  ">
              <motion.a
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                target="_blank"
                whileHover={{
                  scale: 1.1,
                }}
                type="button"
                className=" inline-block  px-3 py-1 mx-2 text-lg font-semibold  mr-2 mb-2 border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300"
                href="https://github.com/akshattnd/threadClone"
              >
                Code
              </motion.a>
            </div>
          </div>
        </ProjectAnimation>
      </div>
    </div>
  );
};

export default Projects;
