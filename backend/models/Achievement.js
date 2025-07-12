const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  xpReward: { type: Number, default: 0 },
});

module.exports = mongoose.model('Achievement', achievementSchema);
