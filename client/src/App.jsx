import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const API_URL = "https://portfolio-backend-h2vs.onrender.com";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} loading={loading} />
        <Skills />
        <Contact apiUrl={API_URL} />
      </main>
      <Footer />
    </>
  );
}
