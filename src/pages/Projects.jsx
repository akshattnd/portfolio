import React from "react";
import ProjectAnimation from "../components/ProjectAnimation";
import { motion } from "framer-motion";
import Animate from "../components/Animate";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:p-4 p-2 dark:bg-gray-900 dark:text-white">
      <Animate>
        <h2 className="text-3xl md:text-6xl font-bold mb-8 text-white tracking-wide md:p-4 p-2">
          Projects
        </h2>
      </Animate>
      <div className="flex flex-wrap gap-6 md:gap-14 w-[90%] md:w-[70%] mx-auto justify-center align-center p-4 ">
        {[
          {
            img: "sortingVisualizer.png",
            title: "Sorting Visualizer",
            desc: "Web app built with JavaScript and React, featuring animations to visually demonstrate sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort.",
            code: "https://github.com/akshattnd/Sorting-algorithm-visualizer",
            live: "https://akshattnd.github.io/Sorting-algorithm-visualizer/",
          },
          {
            img: "todo.png",
            title: "Todo App",
            desc: "Task management app using React, Context API, and Local Storage. Users can add, edit, and delete tasks with a clean UI.",
            code: "https://github.com/akshattnd/todoApp",
            live: "https://akshattnd.github.io/todoApp/",
          },
          {
            img: "weather.png",
            title: "Weather App",
            desc: "Real-time weather app using an API. Features include React paginators for smooth navigation, displaying temperature, humidity, and forecasts.",
            code: "https://github.com/akshattnd/weatherApp",
            live: "https://akshattnd.github.io/weatherApp/",
          },
          {
            img: "thread.png",
            title: "Thread Clone",
            desc: "A social media clone built using the MERN stack with TypeScript and Redux for better state management. Users can post, comment, and interact with content.",
            code: "https://github.com/akshattnd/threadClone",
            live: null,
          },
        ].map((project, index) => (
          <ProjectAnimation key={index}>
            <div className="max-w-sm rounded-xl  overflow-hidden shadow-xl  dark:bg-[#1E1E1E]">
              <img
                loading="lazy"
                className="object-fill mx-auto"
                src={`${import.meta.env.BASE_URL}${project.img}`}
                alt={project.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-gray-200">
                  {project.title}
                </div>
                <p className="text-white dark:text-gray-400 text-base">
                  {project.desc}
                </p>
              </div>
              <div className="flex justify-center pb-4 gap-4">
                <motion.a
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="inline-block px-3 py-1 mx-2 text-lg font-semibold border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white dark:bg-[#6D28D9] dark:text-white dark:hover:bg-white dark:hover:text-[#6D28D9] transition-colors duration-300"
                  href={project.code}
                >
                  Code
                </motion.a>
                {project.live && (
                  <motion.a
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="mx-2 inline-block px-3 py-1 text-lg font-semibold border-2 border-[#6D28D9] rounded-3xl mt-1.5 md:mt-3 bg-white text-purple-700 hover:bg-purple-700 hover:text-white dark:bg-[#6D28D9] dark:text-white dark:hover:bg-white dark:hover:text-[#6D28D9] transition-colors duration-300"
                    href={project.live}
                  >
                    Live
                  </motion.a>
                )}
              </div>
            </div>
          </ProjectAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
