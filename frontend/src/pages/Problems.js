import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { getProblems } from '../api';

function Problems() {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    getProblems().then(setProblems);
  }, []);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Problems</Typography>
      <List>
        {problems.map(p => (
          <ListItem button key={p._id}><ListItemText primary={p.title} /></ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Problems;
