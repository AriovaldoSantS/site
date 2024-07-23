// Exemplo em AboutSection.tsx
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sobre Nós
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography variant="body1">
            Somos especialistas em coaching e estamos aqui para ajudar você a alcançar seus objetivos.
            Nossa abordagem personalizada garante resultados eficazes e duradouros.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
