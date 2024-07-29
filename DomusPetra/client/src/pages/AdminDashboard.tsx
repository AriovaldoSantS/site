// src/pages/AdminDashboard.tsx
import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Área Administrativa
      </Typography>
      <Button
        component={Link}
        to="/palestra-manager"
        variant="contained"
        sx={{ backgroundColor: 'black', color: 'white', margin: '8px' }}
      >
        Gerenciar Palestras
      </Button>
      <Button
        component={Link}
        to="/add-blog"
        variant="contained"
        sx={{ backgroundColor: 'black', color: 'white', margin: '8px' }}
      >
        Adicionar Blog
      </Button>
      <Button
        component={Link}
        to="/add-consulting"
        variant="contained"
        sx={{ backgroundColor: 'black', color: 'white', margin: '8px' }}
      >
        Adicionar Consultoria
      </Button>
      <Button
        component={Link}
        to="/add-training"
        variant="contained"
        sx={{ backgroundColor: 'black', color: 'white', margin: '8px' }}
      >
        Adicionar Treinamento
      </Button>
    </Container>
  );
};

export default AdminDashboard;
