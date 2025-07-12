const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gamifieddsa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Redis connection
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});
redisClient.connect().catch(console.error);

app.get('/', (req, res) => {
  res.send('Gamified DSA Tracker Backend Running');
});

// Registering routes
const userRoutes = require('./routes/user');
const problemRoutes = require('./routes/problem');
const battleRoutes = require('./routes/battle');
const achievementRoutes = require('./routes/achievement');
const leaderboardRoutes = require('./routes/leaderboard');

app.use('/api/users', userRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/battles', battleRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
