// App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>
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
          Hi, I'm Aishwarya R
        </motion.h2>
        <p className="hero-subtitle">
          Web Developer • Full-Stack Enthusiast • Hackathon Lover
        </p>
        <div className="socials">
          <a href="https://github.com/AishwaryaR04" target="_blank" rel="noreferrer"><Github size={28} /></a>
          <a href="https://www.linkedin.com/in/aishwarya-r-a709a0322/" target="_blank" rel="noreferrer"><Linkedin size={28} /></a>
          <a href="mailto:aishwarya.r2024@vitstudent.ac.in"><Mail size={28} /></a>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
<section id="about" className="about">
  <h2>✨ About Me</h2>
  <p>
    I am a passionate Web Developer who enjoys creating interactive and user-friendly applications. 
    My interests lie in front-end and full-stack development, where I can combine creativity with 
    problem-solving to build meaningful digital experiences. I’ve showcased these skills in hackathons, 
    including <strong>Flutter Frames by GDG VIT Chennai</strong> (where my team won 3rd place) and an online hackathon 
    where I developed a travel guide website with dynamic maps and 3D models.
  </p>
  <p>
    In addition to web development, I am deeply interested in AI/ML and enjoy finding ways to integrate 
    AI features into web applications. I am particularly curious about <strong>Generative AI</strong>, 
    <strong> Multimodal AI</strong>, and <strong>AI for Social Good</strong>, and I aspire to build solutions 
    that combine the best of both fields to solve real-world problems. I am persistent, quick to grasp new 
    concepts, and enjoy working in teams as well as on individual projects.
  </p>

  <h3>💡 Skills</h3>
<ul className="skills-grid">
  <li>🌐 Web Development: HTML, CSS, JavaScript, React, Tailwind CSS, Flutter (beginner)</li>
  <li>💻 Programming: Python, Java, C</li>
  
  <li>✨ Other: Communication, teamwork, adaptability, quick learning</li>
</ul>

<h3>🎯 Fun Facts</h3>
<ul className="fun-facts">
  <li>🚀 Hackathons are my favorite way to learn and build</li>
  <li>🤝 I adapt easily and “match the vibe” when collaborating</li>
  <li>🌍 Love experimenting with new tools and bringing ideas to life</li>
</ul>

</section>


      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {[
            { title: "💫 LumiPass", desc: "A simple and elegant travel discovery app that helps users find top tourist destinations in cities.Built using HTML, CSS, and Vanilla JavaScript – electronjs frameworks." },
            { title: "👗 Outfit Planner", desc: "Outfit Planner is a sleek and minimal desktop application built with Electron.js, HTML, CSS, and JavaScript. It helps you organize your wardrobe, create outfit combinations, and plan what to wear for upcoming days" },
            { title: "📃 TaskManager", desc: "The Task Manager is a productivity web app built with React.js and CSS. It lets users add, update, and filter tasks with data persistence using localStorage, all in a clean and user-friendly interface." },
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
        <p>Thank you for visiting MyPortfolio xD</p>
      </footer>
    </div>
  );
}

export default App;
