import React from "react";
import ProjectAnimation from "../components/ProjectAnimation";
import { motion } from "framer-motion";
import Animate from "../components/Animate";
const createdProjects = [
  {
    img: "agentic-ai.png", // add screenshot
    title: "Agentic AI Chat Backend",
    desc: "AI chatbot backend built with FastAPI, LangChain, and LangGraph. Supports streaming responses, tool calling, short-term and long-term memory, and Grok API integration.",
    code: "https://github.com/akshattnd/agentic_ai",
    live: null,
  },
  {
    img: "resume-shortlisting.png",
    title: "AI Resume Shortlisting Bot",
    desc: "AI-powered resume screening system that matches resumes against job descriptions using LLMs to automate candidate shortlisting and ranking.",
    code: "https://github.com/akshattnd/ai-resume-shortlisting-bot-from-job-description",
    live: null,
  },
  {
    img: "stockflow.png",
    title: "StockFlow API",
    desc: "Inventory and stock management backend built with FastAPI. Provides scalable REST APIs for managing products, stock movements, and warehouse operations.",
    code: "https://github.com/akshattnd/stockflow",
    live: null,
  },
  {
    img: "url-shortener.png",
    title: "URL Shortener",
    desc: "FastAPI-based URL shortener with short link generation, redirection, and persistent storage. Designed with a clean REST API architecture.",
    code: "https://github.com/akshattnd/url_shortner/tree/dev",
    live: null,
  },
  {
    img: "ratelimiter.png",
    title: "Rate Limiter",
    desc: "MERN application implementing a Token Bucket rate limiter as reusable Express middleware to protect APIs from excessive requests.",
    code: "https://github.com/akshattnd/ratelimiter",
    live: null,
  },
  {
    img: "thread.png",
    title: "Thread Clone",
    desc: "A social media clone built using the MERN stack with TypeScript and Redux for better state management. Users can post, comment, and interact with content.",
    code: "https://github.com/akshattnd/threadClone",
    live: null,
  },
  {
    img: "sortingVisualizer.png",
    title: "Sorting Visualizer",
    desc: "Web app built with JavaScript and React featuring animations to visualize Bubble Sort, Merge Sort, Quick Sort, and other sorting algorithms.",
    code: "https://github.com/akshattnd/Sorting-algorithm-visualizer",
    live: "https://akshattnd.github.io/Sorting-algorithm-visualizer/",
  },
  {
    img: "weather.png",
    title: "Weather App",
    desc: "Real-time weather application built with React and Weather APIs, displaying forecasts, humidity, and temperature with a responsive UI.",
    code: "https://github.com/akshattnd/weatherApp",
    live: "https://akshattnd.github.io/weatherApp/",
  },
  {
    img: "todo.png",
    title: "Todo App",
    desc: "Task management application built with React, Context API, and Local Storage featuring task creation, editing, and persistence.",
    code: "https://github.com/akshattnd/todoApp",
    live: "https://akshattnd.github.io/todoApp/",
  },
];
const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:p-4 p-2 dark:bg-gray-900 dark:text-white">
      <Animate>
        <h2 className="text-3xl md:text-6xl font-bold mb-8 text-white tracking-wide md:p-4 p-2">
          Projects
        </h2>
      </Animate>
      <div className="flex flex-wrap gap-6 md:gap-14 w-[90%] md:w-[70%] mx-auto justify-center align-center p-4 ">
        {createdProjectes.map((project, index) => (
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
