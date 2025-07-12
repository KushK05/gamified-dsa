const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemController');
const { authenticate, isAdmin } = require('../utils/auth');

router.get('/', problemController.getAllProblems);
router.get('/:id', problemController.getProblemById);
router.post('/', authenticate, isAdmin, problemController.createProblem);
router.put('/:id', authenticate, isAdmin, problemController.updateProblem);
router.delete('/:id', authenticate, isAdmin, problemController.deleteProblem);

module.exports = router;
