import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Skill from "./pages/Skill";
import { Element } from "react-scroll";
function App() {
  return (
    <Layout>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skill />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Footer />
    </Layout>
  );
}

export default App;
