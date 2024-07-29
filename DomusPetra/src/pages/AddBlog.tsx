import { Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const FormContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '600px',
}));

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = () => {
    // Handle submit logic here (e.g., send data to API)
    console.log({ title, text, image });
  };

  return (
    <FormContainer>
      <Typography variant="h4" gutterBottom>
        Adicionar Novo Post
      </Typography>
      <TextField
        fullWidth
        label="Título"
        variant="outlined"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        fullWidth
        label="Texto"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        component="label"
        margin="normal"
      >
        Adicionar Imagem
        <input
          type="file"
          hidden
          onChange={(e) => e.target.files && setImage(e.target.files[0])}
        />
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        sx={{ mt: 2 }}
      >
        Adicionar Post
      </Button>
    </FormContainer>
  );
};

export default AddBlog;
