import React from "react";
import { motion } from "framer-motion";

import Animate from "../components/Animate";
import ProjectAnimation from "../components/ProjectAnimation";

const createdProjects = [
  {
    img: "agentic-ai.png",
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

const buttonClass =
  "inline-block px-4 py-2 text-lg font-semibold border-2 border-[#6D28D9] rounded-full bg-white text-purple-700 hover:bg-purple-700 hover:text-white dark:bg-[#6D28D9] dark:text-white dark:hover:bg-white dark:hover:text-[#6D28D9] transition-colors duration-300";

const Projects = () => {
  return (
    <section className="min-h-screen dark:bg-gray-900 dark:text-white py-12 px-4">
      <Animate>
        <h2 className="text-center text-4xl md:text-6xl font-bold mb-12">
          Projects
        </h2>
      </Animate>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {createdProjects.map((project, index) => (
          <ProjectAnimation key={project.title}>
            <div className="flex flex-col w-[340px] rounded-xl overflow-hidden shadow-xl bg-white dark:bg-[#1E1E1E] h-full">
              <img
                loading="lazy"
                src={`${import.meta.env.BASE_URL}${project.img}`}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-gray-200">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-400 flex-1">
                  {project.desc}
                </p>

                <div className="flex justify-center gap-4 mt-6">
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={buttonClass}
                  >
                    Code
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={buttonClass}
                    >
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </ProjectAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
