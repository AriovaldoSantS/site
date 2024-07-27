import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services: React.FC = () => {
  const [consultoria, setConsultoria] = useState([]);
  const [treinamentos, setTreinamentos] = useState([]);
  const [palestras, setPalestras] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [consultoriaData, treinamentosData, palestrasData] = await Promise.all([
          axios.get('http://localhost:3001/api/consultoria'),
          axios.get('http://localhost:3001/api/treinamentos'),
          axios.get('http://localhost:3001/api/palestras')
        ]);
        setConsultoria(consultoriaData.data);
        setTreinamentos(treinamentosData.data);
        setPalestras(palestrasData.data);
      } catch (error) {
        setError('Erro ao buscar os dados.');
        console.error('Erro ao buscar os dados:', error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Serviços</Typography>
      
      <Typography variant="h5" gutterBottom>Consultoria</Typography>
      <List>
        {consultoria.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom>Treinamentos</Typography>
      <List>
        {treinamentos.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" gutterBottom>Palestras</Typography>
      <List>
        {palestras.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Services;
