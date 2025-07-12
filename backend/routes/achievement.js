const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');
const { authenticate, isAdmin } = require('../utils/auth');

router.get('/', achievementController.getAllAchievements);
router.post('/', authenticate, isAdmin, achievementController.createAchievement);

module.exports = router;
