import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

let palestras: any[] = [];

app.get('/api/palestra', (req, res) => {
  res.json(palestras);
});

app.post('/api/palestra', (req, res) => {
  const newPalestra = req.body;
  palestras.push(newPalestra);
  res.status(201).json(newPalestra);
});

app.put('/api/palestra/:id', (req, res) => {
  const { id } = req.params;
  const updatedPalestra = req.body;
  palestras = palestras.map(palestra => palestra.id === Number(id) ? updatedPalestra : palestra);
  res.json(updatedPalestra);
});

app.delete('/api/palestra/:id', (req, res) => {
  const { id } = req.params;
  palestras = palestras.filter(palestra => palestra.id !== Number(id));
  res.status(204).end();
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
