// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const data = {
  consultoria: [],
  treinamentos: [],
  palestras: [],
};

app.use(cors());
app.use(bodyParser.json()); // Permite o parsing de JSON no corpo da requisição

// Rotas GET existentes

app.get('/api/consultoria', (req, res) => {
  res.json(data.consultoria);
});

app.get('/api/treinamentos', (req, res) => {
  res.json(data.treinamentos);
});

app.get('/api/palestras', (req, res) => {
  res.json(data.palestras);
});

// Nova rota POST para adicionar palestras
app.post('/api/palestras', (req, res) => {
  const newPalestra = req.body;
  data.palestras.push(newPalestra);
  res.status(201).json(newPalestra);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
