import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Scene3D from '../components/Scene3D'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import cvFile from '../assets/hizqeelmirza_cv.pdf'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* 3D Canvas Background */}
      <Canvas
        camera={{ position: [0, 5, 20], fov: 60 }}
        className="canvas-3d"
      >
        <Scene3D />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Canvas>

      {/* Overlay Content */}
      <div className="content-overlay">
        {/* Hero Section */}
        <section id="home" className="section hero-container">
          <motion.div
            className="hero-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="hero-title">
              Hello, I'm <span className="gradient-text">Hizqeel</span>
            </h1>
            
            <div className="hero-subtitle-container">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="hero-subtitle typing-animation"
                repeat={Infinity}
              />
            </div>

            <p className="hero-description">
              Crafting innovative web experiences with modern technologies
            </p>

            {/* Social Links */}
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="mailto:your@email.com"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>

            <div className="tech-stack">
              <motion.div 
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                React
              </motion.div>
              <motion.div 
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Express
              </motion.div>
                            <motion.div 
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Flutter
              </motion.div>
              <motion.div 
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                MongoDB
              </motion.div>
              <motion.div 
                className="tech-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Node.js
              </motion.div>
            </div>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </button>
              <a href={cvFile} download="Hizqeel_Mirza_CV.pdf" className="btn btn-download" style={{ textDecoration: 'none' }}>
                <FaDownload /> Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage
