const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @route   GET /api/projects/featured
// @desc    Get featured projects
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// @route   POST /api/projects
// @desc    Create a project
// @access  Private (add authentication middleware later)
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const project = await newProject.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Bad Request', error: error.message });
  }
});

module.exports = router;
