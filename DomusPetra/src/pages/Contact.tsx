import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

// Estilização do formulário
const useStyles = makeStyles({
  paper: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: 16,
  },
  submit: {
    margin: '24px 0px 16px',
  },
});

const Contact: React.FC = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simular envio de dados
    console.log('Form submitted:', formValues);
    setSubmitted(true);
    // Limpar formulário após envio
    setFormValues({ name: '', email: '', message: '' });
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Entre em Contato
        </Typography>
        {submitted ? (
          <Typography variant="h6" color="primary">
            Obrigado pelo contato! Responderemos em breve.
          </Typography>
        ) : (
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  label="Nome"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Mensagem"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar
            </Button>
          </form>
        )}
      </Paper>
      <Box mt={5} textAlign="center">
        <Typography variant="h6" gutterBottom>
          Outras Informações de Contato
        </Typography>
        <Typography variant="body1">Telefone: (11) 99999-9999</Typography>
        <Typography variant="body1">Email: contato@domuspetra.com.br</Typography>
        <Typography variant="body1">Endereço: Rua Exemplo, 123, São Paulo, SP</Typography>
      </Box>
    </Container>
  );
};

export default Contact;
