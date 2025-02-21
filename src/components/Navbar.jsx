import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = "hover:text-[#C084FC] p-2 md:p-4 text-lg md:text-xl";

  return (
    <nav className="flex items-center flex-wrap justify-between p-4 shadow-lg sticky top-0 z-50 bg-[#1a202c] ">
      <h1 className="text-2xl md:text-4xl font-bold text-[#6D28D9] md:px-4 px-2">
        Akshat Tandon
      </h1>
      <div className="md:hidden md:px-4 md:text-2xl px-2">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "flex flex-col sticky mt-1.5 w-full bg-[#1a202c] shadow-lg rounded-lg"
            : "hidden"
        } md:space-x-4 md:flex md:flex-row md:static md:w-auto px-2 md:px-4 bg-[#1a202c]`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setIsOpen(false)}
          activeClass="active"
          className={`${linkClass}  transition-colors duration-300`}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setIsOpen(false)}
          activeClass="active"
          className={`${linkClass} transition-colors duration-300 active:text-[#6D28D9] active:font-semibold`}
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setIsOpen(false)}
          activeClass="active"
          className={`${linkClass} transition-colors duration-300 active:text-[#6D28D9] active:font-semibold`}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setIsOpen(false)}
          activeClass="active"
          className={`${linkClass} transition-colors duration-300 active:text-[#6D28D9] active:font-semibold`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
