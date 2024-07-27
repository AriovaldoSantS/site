const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const palestras = [
  {
    id: 1,
    title: "Palestra 1",
    description: "Descrição da Palestra 1",
    image: "/path/to/image1.jpg"
  },
  {
    id: 2,
    title: "Palestra 2",
    description: "Descrição da Palestra 2",
    image: "/path/to/image2.jpg"
  },
  // Adicione mais palestras aqui
];

app.get('/api/palestras', (req, res) => {
  res.json(palestras);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
