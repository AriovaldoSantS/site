// src/pages/Palestras.tsx
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  text: string;
  image: string;
}

const Palestras: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPalestras = async () => {
      try {
        const response = await axios.get('/api/palestras');
        setPalestras(response.data);
      } catch (error) {
        setError('Erro ao carregar palestras.');
      } finally {
        setLoading(false);
      }
    };

    fetchPalestras();
  }, []);

  if (loading) return <Typography variant="h6" align="center">Carregando...</Typography>;
  if (error) return <Typography variant="h6" color="error" align="center">{error}</Typography>;

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
                loading="lazy"
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
