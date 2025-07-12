const Achievement = require('../models/Achievement');
const User = require('../models/User');

exports.getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAchievement = async (req, res) => {
  try {
    const { name, description, xpReward } = req.body;
    const achievement = await Achievement.create({ name, description, xpReward });
    res.status(201).json(achievement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
