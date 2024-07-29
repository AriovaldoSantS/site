// src/pages/AdminDashboard.tsx
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Painel Administrativo
      </Typography>
      <Box mt={2}>
        <Button variant="contained" component={Link} to="/add-blog" sx={{ mr: 2 }}>
          Adicionar Postagem no Blog
        </Button>
        <Button variant="contained" component={Link} to="/add-consulting" sx={{ mr: 2 }}>
          Adicionar Consultoria
        </Button>
        <Button variant="contained" component={Link} to="/add-palestra" sx={{ mr: 2 }}>
          Adicionar Palestra
        </Button>
        <Button variant="contained" component={Link} to="/add-training">
          Adicionar Treinamento
        </Button>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
