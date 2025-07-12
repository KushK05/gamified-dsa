const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  achievements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Achievement' }],
  battles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Battle' }],
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
