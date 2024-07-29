// src/pages/AddBlog.tsx
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  text: string;
  image: string;
}

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!title || !text || !image) {
      alert('Todos os campos são obrigatórios.');
      return;
    }

    const newBlogPost: BlogPost = {
      id: Date.now(),
      title,
      text,
      image: image.toString(),
    };

    const existingBlogPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    localStorage.setItem('blogPosts', JSON.stringify([...existingBlogPosts, newBlogPost]));

    alert('Postagem adicionada com sucesso!');
    setTitle('');
    setText('');
    setImage(null);
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h4" gutterBottom>
          Adicionar Postagem no Blog
        </Typography>
        <TextField
          label="Título"
          variant="outlined"
          margin="normal"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Texto"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          component="label"
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Imagem
          <input
            type="file"
            hidden
            onChange={handleImageChange}
          />
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Adicionar Postagem
        </Button>
      </Box>
    </Container>
  );
};

export default AddBlog;
