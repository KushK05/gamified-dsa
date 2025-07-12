const express = require('express');
const router = express.Router();
const battleController = require('../controllers/battleController');
const { authenticate } = require('../utils/auth');

router.post('/start', authenticate, battleController.startBattle);
router.post('/submit', authenticate, battleController.submitSolution);
router.get('/:id', authenticate, battleController.getBattleById);

module.exports = router;
