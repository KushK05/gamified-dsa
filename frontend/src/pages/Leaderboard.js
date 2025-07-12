import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { getLeaderboard } from '../api';

function Leaderboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getLeaderboard().then(setUsers);
  }, []);
  const getTrophy = (rank) => {
    if (rank === 1) return <EmojiEventsIcon color="warning" />;
    if (rank === 2) return <EmojiEventsIcon color="secondary" />;
    if (rank === 3) return <EmojiEventsIcon color="disabled" />;
    return null;
  };
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center">Leaderboard</Typography>
        <Paper elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>XP</TableCell>
                <TableCell>Level</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((u, idx) => (
                <TableRow key={u._id}>
                  <TableCell>{getTrophy(idx + 1) || idx + 1}</TableCell>
                  <TableCell>{u.username}</TableCell>
                  <TableCell>{u.xp}</TableCell>
                  <TableCell>{u.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
}

export default Leaderboard;
