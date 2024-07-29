import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  text: string;
  image: string;
}

const AddPalestra: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentPalestra, setCurrentPalestra] = useState<Palestra | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    fetchPalestras();
  }, []);

  const fetchPalestras = async () => {
    try {
      const response = await axios.get('/api/palestra');
      const data = response.data;

      if (Array.isArray(data)) {
        setPalestras(data);
      } else {
        console.error('Expected an array of palestras');
      }
    } catch (error) {
      console.error('Error fetching palestras:', error);
    }
  };

  const handleAddOrUpdatePalestra = async () => {
    if (!title || !text || !image) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    try {
      if (editMode && currentPalestra) {
        await axios.put(`/api/palestra/${currentPalestra.id}`, { title, text, image });
      } else {
        await axios.post('/api/palestra', { title, text, image });
      }
      setTitle('');
      setText('');
      setImage('');
      setEditMode(false);
      setCurrentPalestra(null);
      fetchPalestras();
    } catch (error) {
      console.error('Error adding or updating palestra:', error);
    }
  };

  const handleEdit = (palestra: Palestra) => {
    setEditMode(true);
    setCurrentPalestra(palestra);
    setTitle(palestra.title);
    setText(palestra.text);
    setImage(palestra.image);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/palestra/${id}`);
      fetchPalestras();
    } catch (error) {
      console.error('Error deleting palestra:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {editMode ? 'Editar Palestra' : 'Adicionar Palestra'}
      </Typography>
      <TextField
        label="Título"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Texto"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Imagem URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddOrUpdatePalestra}
      >
        {editMode ? 'Atualizar Palestra' : 'Adicionar Palestra'}
      </Button>

      <Grid container spacing={4} style={{ marginTop: 20 }}>
        {Array.isArray(palestras) && palestras.map((palestra) => (
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
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEdit(palestra)}
                  style={{ margin: '10px' }}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(palestra.id)}
                >
                  Excluir
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AddPalestra;
