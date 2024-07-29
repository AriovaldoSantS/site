import { Alert, Button, Container, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  text: string;
  image: string;
}

const AdminDashboard: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [currentPalestra, setCurrentPalestra] = useState<Palestra | null>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [notification, setNotification] = useState<{ open: boolean, message: string, severity: 'success' | 'error' }>({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    fetchPalestras();
  }, []);

  const fetchPalestras = async () => {
    try {
      const response = await axios.get('/api/palestra');
      setPalestras(response.data);
    } catch (error) {
      showNotification('Error fetching palestras:', 'error');
    }
  };

  const handleAddOrUpdatePalestra = async () => {
    if (!title || !text || !image) {
      showNotification('Todos os campos são obrigatórios.', 'error');
      return;
    }

    try {
      if (editMode && currentPalestra) {
        await axios.put(`/api/palestra/${currentPalestra.id}`, { title, text, image });
        showNotification('Palestra atualizada com sucesso!', 'success');
      } else {
        await axios.post('/api/palestra', { title, text, image });
        showNotification('Palestra adicionada com sucesso!', 'success');
      }
      resetForm();
      fetchPalestras();
    } catch (error) {
      showNotification('Error adding or updating palestra:', 'error');
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
      showNotification('Palestra excluída com sucesso!', 'success');
      fetchPalestras();
    } catch (error) {
      showNotification('Error deleting palestra:', 'error');
    }
  };

  const showNotification = (message: string, severity: 'success' | 'error') => {
    setNotification({ open: true, message, severity });
  };

  const resetForm = () => {
    setTitle('');
    setText('');
    setImage('');
    setEditMode(false);
    setCurrentPalestra(null);
  };

  const handleCloseSnackbar = () => {
    setNotification({ ...notification, open: false });
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
        style={{ marginTop: 20 }}
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

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AdminDashboard;
