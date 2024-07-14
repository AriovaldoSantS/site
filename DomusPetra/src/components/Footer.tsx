import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Domus Petra
            </Typography>
            <Typography variant="body2">
              Rua Tangará, 470 - Bairro Iririú<br />
              Joinville - SC<br />
              CEP: 898227-100<br />
              contato@domuspetra.com.br
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links Úteis
            </Typography>
            <Link href="/" color="inherit" underline="none">
              Home
            </Link><br />
            <Link href="/about" color="inherit" underline="none">
              Sobre
            </Link><br />
            <Link href="/services" color="inherit" underline="none">
              Serviços
            </Link><br />
            <Link href="/blog" color="inherit" underline="none">
              Blog
            </Link><br />
            <Link href="/contact" color="inherit" underline="none">
              Contato
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2">
              Email: contato@domuspetra.com.br<br />
              Telefone: (11) 1234-5678
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Domus Petra. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;