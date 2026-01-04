import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiFlutter, SiPython, SiGit, SiDocker, SiPostgresql, SiFirebase } from 'react-icons/si'
import './Skills.css'

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillsData = {
    frontend: [
      { name: 'React', icon: <SiReact />, level: 90 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
      { name: 'Flutter', icon: <SiFlutter />, level: 80 },
      { name: 'Python', icon: <SiPython />, level: 88 },
    ],
    backend: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 90 },
      { name: 'Express', icon: <SiExpress />, level: 88 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
      { name: 'Firebase', icon: <SiFirebase />, level: 82 },
    ],
    tools: [
      { name: 'Git', icon: <SiGit />, level: 90 },
      { name: 'Docker', icon: <SiDocker />, level: 75 },
    ]
  }

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="skills-categories">
          {/* Frontend Skills */}
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="category-title">Frontend</h3>
            <div className="skills-grid">
              {skillsData.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="category-title">Backend</h3>
            <div className="skills-grid">
              {skillsData.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
