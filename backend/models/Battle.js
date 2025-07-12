const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  status: { type: String, enum: ['pending', 'active', 'completed'], default: 'pending' },
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startedAt: Date,
  endedAt: Date,
});

module.exports = mongoose.model('Battle', battleSchema);
