import express from 'express';

const router = express.Router();

// Mock database
let consultorias = [
  { id: 1, title: 'Consultoria 1', text: 'Texto da consultoria 1', image: 'image1.jpg' },
  { id: 2, title: 'Consultoria 2', text: 'Texto da consultoria 2', image: 'image2.jpg' },
];

router.get('/', (req, res) => {
  res.json(consultorias);
});

router.post('/', (req, res) => {
  const newConsultoria = req.body;
  consultorias.push(newConsultoria);
  res.status(201).json(newConsultoria);
});

export default router;
