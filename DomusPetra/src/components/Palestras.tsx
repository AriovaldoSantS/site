
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Palestras: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/palestras')
      .then(response => {
        setPalestras(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as palestras:', error);
      });
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Palestras
      </Typography>
      <Grid container spacing={2}>
        {palestras.map(palestra => (
          <Grid item xs={12} sm={6} md={4} key={palestra.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={palestra.image}
                alt={palestra.title}
              />
              <CardContent>
                <Typography variant="h6">{palestra.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {palestra.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Palestras;
