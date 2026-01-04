import { useState } from 'react'
import { motion } from 'framer-motion'
import cvFile from '../assets/hizqeelmirza_cv.pdf'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
        >
          <span className="logo-text">HM Studios</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <motion.a
            href={cvFile}
            download="Hizqeel_Mirza_CV.pdf"
            className="btn-resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Download CV
          </motion.a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
