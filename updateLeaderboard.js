const fs = require('fs');

// Read data from GitHub Actions event payload
const eventData = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
const nickname = eventData.nickname;
const score = eventData.score;

// Read existing leaderboard data
const leaderboardData = JSON.parse(fs.readFileSync('leaderboard.json', 'utf8'));

// Update leaderboard with new score
leaderboardData.push({ nickname, score });
leaderboardData.sort((a, b) => b.score - a.score);
leaderboardData.splice(100); // Keep only the top 100 scores

// Write updated leaderboard data back to file
fs.writeFileSync('leaderboard.json', JSON.stringify(leaderboardData, null, 2));
