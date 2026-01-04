const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// @route   GET /api/skills
// @desc    Get all skills
// @access  Public
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @route   GET /api/skills/category/:category
// @desc    Get skills by category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const skills = await Skill.find({ category: req.params.category });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @route   POST /api/skills
// @desc    Create a skill
// @access  Private (add authentication middleware later)
router.post('/', async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    const skill = await newSkill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error: error.message });
  }
});

module.exports = router;
