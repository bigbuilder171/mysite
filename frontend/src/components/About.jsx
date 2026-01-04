import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import portraitImage from '../portrait.jpeg'
import './About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="about-section">
      <div className="about-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p className="about-description">
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless, 
                scalable, and user-friendly digital experiences.
              </p>
              <p className="about-description">
                My journey in web development started with a curiosity for how things work on the internet, 
                and has evolved into a career focused on creating impactful solutions using the MERN stack 
                and modern development practices.
              </p>

              <div className="about-highlights">
                <motion.div 
                  className="highlight-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </motion.div>
                <motion.div 
                  className="highlight-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </motion.div>
                <motion.div 
                  className="highlight-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>10+</h3>
                  <p>Happy Clients</p>
                </motion.div>
              </div>

              <div className="about-status">
                <div className="status-indicator"></div>
                <span>Available for freelance opportunities</span>
              </div>
            </div>

            <div className="about-image">
              <motion.div 
                className="image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={portraitImage} alt="Profile" className="profile-image" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
