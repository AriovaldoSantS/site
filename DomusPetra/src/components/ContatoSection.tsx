import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import fundo_sobre from "../assets/img/contatos/pagina-contato.jpg";

const AboutSection: React.FC = () => {
  return (
    <Box sx={{ padding: 0, textAlign: 'center', width: '100vw', height: '85vh', overflow: 'hidden' }} style={{ color: "black" }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${fundo_sobre})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          background: "rgba(0, 0, 0, 0.5)",
          padding: 2,
        }}
      >
        <Typography variant="h1" sx={{ textShadow: "2px 2px 2px gray", mb: 4, fontSize:"70px" }}>
          Entre em Contato
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} sx={{ backgroundColor: "white", padding: "16px", borderRadius: '8px', boxShadow: 3 }}>
           
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 2,
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <TextField
                fullWidth
                label="Nome"
                variant="outlined"
                placeholder="Digite seu nome"
                required
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                placeholder="Digite seu email"
                type="email"
                required
                sx={{ backgroundColor: 'white' }}
              />
              <TextField
                fullWidth
                label="Telefone"
                variant="outlined"
                placeholder="Digite seu telefone"
                type="tel"
                required
                sx={{ backgroundColor: 'white' }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginTop: 2 }}
              >
                Enviar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;
