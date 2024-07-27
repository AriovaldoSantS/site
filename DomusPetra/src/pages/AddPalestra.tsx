// src/pages/AddPalestra.tsx
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const AddPalestra: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newPalestra = { title, description };
      await axios.post('http://localhost:3001/api/palestras', newPalestra);
      setTitle('');
      setDescription('');
      setError(null);
      // Adicione uma notificação ou redirecionamento, se desejar
    } catch (error) {
      setError('Erro ao adicionar a palestra.');
      console.error('Erro ao adicionar a palestra:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Adicionar Palestra</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Descrição"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary">Adicionar</Button>
      </form>
    </Container>
  );
};

export default AddPalestra;
