const Battle = require('../models/Battle');
const Problem = require('../models/Problem');
const User = require('../models/User');
const { submitCode } = require('../utils/judge0');

exports.startBattle = async (req, res) => {
  try {
    const { opponentId, problemId } = req.body;
    const problem = await Problem.findById(problemId);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });
    const battle = await Battle.create({
      participants: [req.user.id, opponentId],
      problem: problemId,
      status: 'active',
      startedAt: new Date(),
    });
    await User.findByIdAndUpdate(req.user.id, { $push: { battles: battle._id } });
    await User.findByIdAndUpdate(opponentId, { $push: { battles: battle._id } });
    res.status(201).json(battle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitSolution = async (req, res) => {
  try {
    const { battleId, source_code, language_id } = req.body;
    const battle = await Battle.findById(battleId).populate('problem');
    if (!battle || battle.status !== 'active') return res.status(400).json({ error: 'Battle not active' });
    // Run code for each test case
    let allPassed = true;
    for (const tc of battle.problem.testCases) {
      const result = await submitCode(source_code, language_id, tc.input);
      if (result.stdout.trim() !== tc.output.trim()) {
        allPassed = false;
        break;
      }
    }
    if (allPassed) {
      battle.status = 'completed';
      battle.winner = req.user.id;
      battle.endedAt = new Date();
      await battle.save();
      // XP/level logic
      const user = await User.findById(req.user.id);
      user.xp += 100;
      if (user.xp >= user.level * 500) {
        user.level += 1;
      }
      await user.save();
      res.json({ message: 'Victory!', battle });
    } else {
      res.json({ message: 'Test cases failed' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBattleById = async (req, res) => {
  try {
    const battle = await Battle.findById(req.params.id).populate('problem').populate('participants').populate('winner');
    if (!battle) return res.status(404).json({ error: 'Not found' });
    res.json(battle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
