import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import axios from 'axios'
import './Contact.css'

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData)
      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>Don't like forms? Send me an email. 👋</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>hizqeelmirza@email.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+44 7949 414831</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-input form-textarea"
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
