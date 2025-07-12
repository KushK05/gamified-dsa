import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

function Dashboard() {
  // Placeholder for user stats, achievements, battles
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card><CardContent><Typography>User Stats</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card><CardContent><Typography>Achievements</Typography></CardContent></Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card><CardContent><Typography>Battles</Typography></CardContent></Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
