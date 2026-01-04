import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import powerupMockup from '../assets/powerup-mockups/Screenshot (60).png'
import sudokuMockup from '../assets/sodoku-mockups/1.jpg'
import starGameMockup from '../assets/stargame-mockups/Screenshot (82).png'
import './Projects.css'

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: 'PowerUP Web Application',
      description: 'A decentralized blockchain-based application built with MERN stack, Solidity smart contracts, and MetaMask integration for secure Web3 interactions.',
      fullDescription: 'PowerUP is a cutting-edge Web3 application that combines traditional MERN stack development with blockchain technology. The platform enables users to interact with smart contracts through MetaMask, providing a seamless bridge between Web2 and Web3. Features include secure wallet integration, real-time blockchain transaction monitoring, and a user-friendly interface for managing decentralized operations.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Solidity', 'MetaMask', 'Web3.js', 'Ethereum'],
      image: powerupMockup,
      github: null, // Add your GitHub repository URL here
      live: null, // Add your live demo URL here
      featured: true,
      features: [
        'Smart contract integration with Solidity',
        'MetaMask wallet connectivity',
        'Real-time blockchain transaction tracking',
        'Secure authentication and authorization',
        'Responsive and intuitive UI/UX',
        'Gas optimization for efficient transactions'
      ]
    },
    {
      id: 2,
      title: 'Sudoku Game',
      description: 'A classic Sudoku puzzle game built with Flutter, featuring multiple difficulty levels, timer, hints system, and beautiful UI/UX.',
      fullDescription: 'An engaging mobile Sudoku game developed using Flutter framework, offering a seamless cross-platform experience on both iOS and Android. The app features an intelligent puzzle generator, real-time validation, hint system, and progress tracking. With a clean and intuitive interface, players can enjoy Sudoku puzzles of varying difficulty levels while tracking their solving times and achievements.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Material Design'],
      image: sudokuMockup,
      github: null, // Add your GitHub repository URL here
      live: null, // Add your live demo URL here
      featured: true,
      features: [
        'Multiple difficulty levels (Easy, Medium, Hard, Expert)',
        'Intelligent puzzle generator with unique solutions',
        'Real-time validation and error detection',
        'Hint system with limited hints per game',
        'Timer and statistics tracking',
        'Save and resume game progress',
        'Clean Material Design UI',
        'Cross-platform support (iOS & Android)'
      ]
    },
    {
      id: 3,
      title: 'Eye-Tracking Star Shooter',
      description: 'An innovative space shooter game controlled by eye movements using computer vision, developed in Python with real-time camera tracking.',
      fullDescription: 'An immersive eye-tracking based space shooter game that uses your device camera to detect eye movements and facial gestures for game control. Built with Python, OpenCV, and Pygame, the game tracks your eye position to move the spaceship and detects blinks or specific gestures to fire lasers at incoming asteroids. This innovative control mechanism creates a unique gaming experience that combines computer vision technology with classic arcade-style gameplay.',
      technologies: ['Python', 'OpenCV', 'Pygame', 'MediaPipe', 'NumPy', 'CVZone'],
      image: starGameMockup,
      github: null,
      live: null,
      featured: true,
      features: [
        'Real-time eye and face tracking using device camera',
        'Eye movement controls spaceship position',
        'Blink detection for firing lasers',
        'Gesture recognition for special abilities',
        'Dynamic difficulty adjustment',
        'Score tracking and high score system',
        'Smooth camera calibration process',
        'Low-latency response for seamless gameplay'
      ]
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                    {!project.github && !project.live && (
                      <p className="no-links-message">Click to view details</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="btn btn-primary">View All Projects</button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
