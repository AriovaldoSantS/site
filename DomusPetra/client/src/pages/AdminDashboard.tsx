import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [palestras, setPalestras] = useState<any[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentPalestra, setCurrentPalestra] = useState<any | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    fetchPalestras();
  }, []);

  const fetchPalestras = async () => {
    try {
      const response = await axios.get('/api/palestra');
      setPalestras(response.data);
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

  const handleEdit = (palestra: any) => {
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
        Dashboard de Administração
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

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Texto</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {palestras.map(palestra => (
              <TableRow key={palestra.id}>
                <TableCell>{palestra.title}</TableCell>
                <TableCell>{palestra.text}</TableCell>
                <TableCell>
                  <img src={palestra.image} alt={palestra.title} style={{ maxWidth: 100 }} />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(palestra)}
                    style={{ marginRight: 8 }}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminDashboard;
