const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../utils/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', authenticate, userController.getProfile);
router.get('/achievements', authenticate, userController.getAchievements);
router.get('/battles', authenticate, userController.getBattles);

module.exports = router;
