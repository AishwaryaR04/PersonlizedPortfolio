// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Aishwarya R</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-title"
        >
          Hi, I'm Aish 👋
        </motion.h2>
        <p className="hero-subtitle">
          Web Developer • AI/ML Enthusiast • Hackathon Lover
        </p>
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={28} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={28} /></a>
          <a href="mailto:your@email.com"><Mail size={28} /></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science student passionate about web development, AI/ML, and building
          meaningful projects. I enjoy participating in hackathons and learning new tech.
        </p>
        <ul className="skills">
          <li>⚛️ React</li>
          <li>🐍 Python</li>
          <li>📱 Android</li>
          <li>🤖 AI/ML</li>
          <li>💾 SQL</li>
          <li>🌐 HTML/CSS</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {[
            { title: "Task Manager", desc: "A React-based to-do app with filters." },
            { title: "Smart Lock System", desc: "8051 microcontroller project with RFID/password." },
            { title: "Sign Language Detection", desc: "AI system using hand gesture recognition." },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Aishwarya R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
