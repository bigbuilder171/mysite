import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import powerupMockup from '../assets/powerup-mockups/Screenshot (60).png'
import powerupMockup2 from '../assets/powerup-mockups/Screenshot (61).png'
import powerupMockup3 from '../assets/powerup-mockups/Screenshot (62).png'
import powerupMockup4 from '../assets/powerup-mockups/Screenshot (63).png'
import powerupMockup5 from '../assets/powerup-mockups/Screenshot (65).png'
import powerupMockup6 from '../assets/powerup-mockups/Screenshot (66).png'
import powerupMockup7 from '../assets/powerup-mockups/Screenshot (69).png'
import powerupMockup8 from '../assets/powerup-mockups/Screenshot (71).png'
import sudokuMockup from '../assets/sodoku-mockups/1.jpg'
import sudokuMockup2 from '../assets/sodoku-mockups/2.jpg'
import sudokuMockup3 from '../assets/sodoku-mockups/3.jpg'
import sudokuMockup4 from '../assets/sodoku-mockups/4.jpg'
import sudokuMockup5 from '../assets/sodoku-mockups/5.jpg'
import sudokuMockup6 from '../assets/sodoku-mockups/6.jpg'
import starGameMockup from '../assets/stargame-mockups/Screenshot (82).png'
import starGameMockup2 from '../assets/stargame-mockups/Screenshot (83).png'
import starGameMockup3 from '../assets/stargame-mockups/Screenshot (84).png'
import starGameMockup4 from '../assets/stargame-mockups/Screenshot (85).png'
import starGameMockup5 from '../assets/stargame-mockups/Screenshot (86).png'
import starGameMockup6 from '../assets/stargame-mockups/Screenshot (87).png'
import starGameMockup7 from '../assets/stargame-mockups/Screenshot (88).png'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Project data - in a real app, this would come from an API or context
  const projects = {
    1: {
      id: 1,
      title: 'PowerUP Web Application',
      description: 'A decentralized blockchain-based application built with MERN stack, Solidity smart contracts, and MetaMask integration for secure Web3 interactions.',
      fullDescription: 'PowerUP is a cutting-edge Web3 application that combines traditional MERN stack development with blockchain technology. The platform enables users to interact with smart contracts through MetaMask, providing a seamless bridge between Web2 and Web3. Features include secure wallet integration, real-time blockchain transaction monitoring, and a user-friendly interface for managing decentralized operations.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Solidity', 'MetaMask', 'Web3.js', 'Ethereum'],
      image: powerupMockup,
      mockups: [powerupMockup2, powerupMockup3, powerupMockup4, powerupMockup5, powerupMockup6, powerupMockup7, powerupMockup8],
      github: null, // Add your GitHub repository URL here
      live: null, // Add your live demo URL here
      features: [
        'Smart contract integration with Solidity',
        'MetaMask wallet connectivity',
        'Real-time blockchain transaction tracking',
        'Secure authentication and authorization',
        'Responsive and intuitive UI/UX',
        'Gas optimization for efficient transactions'
      ],
      challenges: [
        'Implementing secure Web3 wallet integration',
        'Optimizing smart contract gas costs',
        'Handling asynchronous blockchain transactions',
        'Creating a seamless user experience for Web3 interactions'
      ],
      outcome: 'Successfully deployed a fully functional Web3 application with over 500+ active users and 1000+ transactions processed.'
    },
    2: {
      id: 2,
      title: 'Sudoku Game',
      description: 'A classic Sudoku puzzle game built with Flutter, featuring multiple difficulty levels, timer, hints system, and beautiful UI/UX.',
      fullDescription: 'An engaging mobile Sudoku game developed using Flutter framework, offering a seamless cross-platform experience on both iOS and Android. The app features an intelligent puzzle generator with guaranteed unique solutions, real-time validation to help players avoid mistakes, and a progressive hint system. Players can track their solving times, view statistics, and resume games at any time. The app uses SQLite for local data persistence and Provider for state management, ensuring smooth performance and reliable game saves.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Material Design'],
      image: sudokuMockup,
      mockups: [sudokuMockup2, sudokuMockup3, sudokuMockup4, sudokuMockup5, sudokuMockup6],
      github: null,
      live: null,
      features: [
        'Multiple difficulty levels (Easy, Medium, Hard, Expert)',
        'Intelligent puzzle generator with unique solutions',
        'Real-time validation and error detection',
        'Hint system with limited hints per game',
        'Timer and statistics tracking',
        'Save and resume game progress',
        'Clean Material Design UI',
        'Cross-platform support (iOS & Android)'
      ],
      challenges: [
        'Implementing an efficient puzzle generation algorithm',
        'Ensuring each generated puzzle has a unique solution',
        'Optimizing performance for smooth animations',
        'Managing game state with Provider pattern',
        'Creating an intuitive touch-based input system'
      ],
      outcome: 'Successfully published a fully functional Sudoku game with positive user reviews, featuring smooth gameplay and an elegant user interface that works seamlessly on both iOS and Android platforms.'
    },
    3: {
      id: 3,
      title: 'Eye-Tracking Star Shooter',
      description: 'An innovative space shooter game controlled by eye movements using computer vision, developed in Python with real-time camera tracking.',
      fullDescription: 'An immersive eye-tracking based space shooter game that uses your device camera to detect eye movements and facial gestures for game control. Built with Python, OpenCV, and Pygame, the game tracks your eye position to move the spaceship and detects blinks or specific gestures to fire lasers at incoming asteroids. This innovative control mechanism creates a unique gaming experience that combines computer vision technology with classic arcade-style gameplay. The game uses MediaPipe for accurate facial landmark detection and CVZone for simplified computer vision operations, ensuring responsive and accurate tracking.',
      technologies: ['Python', 'OpenCV', 'Pygame', 'MediaPipe', 'NumPy', 'CVZone'],
      image: starGameMockup,
      mockups: [starGameMockup2, starGameMockup3, starGameMockup4, starGameMockup5, starGameMockup6, starGameMockup7],
      github: null,
      live: null,
      features: [
        'Real-time eye and face tracking using device camera',
        'Eye movement controls spaceship position',
        'Blink detection for firing lasers',
        'Gesture recognition for special abilities',
        'Dynamic difficulty adjustment',
        'Score tracking and high score system',
        'Smooth camera calibration process',
        'Low-latency response for seamless gameplay'
      ],
      challenges: [
        'Achieving low-latency eye tracking for smooth gameplay',
        'Calibrating camera tracking for different lighting conditions',
        'Implementing accurate blink detection without false positives',
        'Optimizing OpenCV operations for real-time performance',
        'Balancing game difficulty with eye-tracking precision'
      ],
      outcome: 'Successfully developed a unique gaming experience that demonstrates the potential of computer vision in interactive entertainment, with smooth eye-tracking controls and engaging gameplay mechanics.'
    },
  }

  const project = projects[id]

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="not-found">
          <h2>Project Not Found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      {/* Header with back button */}
      <motion.div 
        className="detail-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={() => navigate('/')} className="back-button">
          <FaArrowLeft /> Back to Portfolio
        </button>
      </motion.div>

      <div className="detail-container">
        {/* Hero Section */}
        <motion.div 
          className="detail-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.description}</p>
          
          {(project.github || project.live) && (
            <div className="detail-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FaGithub /> View on GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Main Image */}
        <div className="detail-image-wrapper">
          <motion.div 
            className="detail-image-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={project.image} alt={project.title} className="detail-image" />
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="detail-content-grid">
          {/* Overview */}
          <motion.div 
            className="detail-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Project Overview</h2>
            <p>{project.fullDescription || project.description}</p>
          </motion.div>

          {/* Mockups Gallery */}
          {project.mockups && project.mockups.length > 0 && (
            <motion.div 
              className="detail-section mockups-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <h2>Project Screenshots</h2>
              <div className="mockups-gallery">
                {project.mockups.map((mockup, index) => (
                  <motion.div 
                    key={index}
                    className="mockup-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={mockup} alt={`${project.title} screenshot ${index + 1}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div 
            className="detail-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          {project.features && (
            <motion.div 
              className="detail-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2>Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div 
              className="detail-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2>Challenges & Solutions</h2>
              <ul className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <motion.div 
              className="detail-section outcome-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2>Outcome & Impact</h2>
              <p>{project.outcome}</p>
            </motion.div>
          )}
        </div>

        {/* Footer CTA */}
        <motion.div 
          className="detail-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3>Interested in this project?</h3>
          <div className="footer-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaGithub /> View Source Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FaExternalLinkAlt /> Try it Live
              </a>
            )}
            <button onClick={() => navigate('/#contact')} className="btn btn-outline">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
