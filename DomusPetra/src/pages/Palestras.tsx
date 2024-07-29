// src/pages/Palestras.tsx
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  text: string;
  image: string;
}

const Palestras: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);

  useEffect(() => {
    const storedPalestras = JSON.parse(localStorage.getItem('palestras') || '[]');
    setPalestras(storedPalestras);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Palestras
      </Typography>
      <Grid container spacing={4}>
        {palestras.map((palestra) => (
          <Grid item xs={12} sm={6} md={4} key={palestra.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={palestra.image}
                alt={palestra.title}
              />
              <CardContent>
                <Typography variant="h5">{palestra.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {palestra.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Palestras;
