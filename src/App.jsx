import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AIWorkflow from "./components/AIWorkflow";
import Writing from "./components/Writing";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-dark-900 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AIWorkflow />
      <Writing />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
