const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['frontend', 'backend', 'database', 'tools', 'other']
  },
  proficiency: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  icon: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Skill', SkillSchema);
