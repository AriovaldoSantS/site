// src/pages/PalestraManager.tsx
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  text: string;
  image: string;
}

const PalestraManager: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentPalestra, setCurrentPalestra] = useState<Palestra | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [openDialog, setOpenDialog] = useState<boolean>(false);

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
      setOpenDialog(false);
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
    setOpenDialog(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/palestra/${id}`);
      fetchPalestras();
    } catch (error) {
      console.error('Error deleting palestra:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditMode(false);
    setCurrentPalestra(null);
    setTitle('');
    setText('');
    setImage('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Gerenciar Palestras
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'black', color: 'white', margin: '8px' }}
        onClick={() => {
          setEditMode(false);
          setOpenDialog(true);
        }}
      >
        Adicionar Palestra
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
                    sx={{ color: 'black', borderColor: 'black', marginRight: 1 }}
                    onClick={() => handleEdit(palestra)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ color: 'black', borderColor: 'black' }}
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

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{editMode ? 'Editar Palestra' : 'Adicionar Palestra'}</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleAddOrUpdatePalestra} color="primary">
            {editMode ? 'Atualizar' : 'Adicionar'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PalestraManager;
