import express from 'express';

const router = express.Router();

// Mock database
let treinamentos = [
  { id: 1, title: 'Treinamento 1', text: 'Texto do treinamento 1', image: 'image1.jpg' },
  { id: 2, title: 'Treinamento 2', text: 'Texto do treinamento 2', image: 'image2.jpg' },
];

router.get('/', (req, res) => {
  res.json(treinamentos);
});

router.post('/', (req, res) => {
  const newTreinamento = req.body;
  treinamentos.push(newTreinamento);
  res.status(201).json(newTreinamento);
});

export default router;
