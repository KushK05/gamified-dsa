const User = require('../models/User');

exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ xp: -1, level: -1 }).select('username xp level');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
