import React from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';

function AdminPanel() {
  // Placeholder for admin features
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>
      <Card><CardContent>Problem/Achievement management and analytics here...</CardContent></Card>
      <Button variant="contained" color="primary">Add Problem</Button>
      <Button variant="contained" color="secondary">Add Achievement</Button>
    </Container>
  );
}

export default AdminPanel;
