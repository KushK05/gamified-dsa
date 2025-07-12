const Problem = require('../models/Problem');

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ error: 'Not found' });
    res.json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProblem = async (req, res) => {
  try {
    const { title, description, difficulty, testCases } = req.body;
    const problem = await Problem.create({ title, description, difficulty, testCases, createdBy: req.user.id });
    res.status(201).json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!problem) return res.status(404).json({ error: 'Not found' });
    res.json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProblem = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndDelete(req.params.id);
    if (!problem) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
