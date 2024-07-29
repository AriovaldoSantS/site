import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Definindo o caminho para a pasta de assets
const assetsPath = path.join(__dirname, '../../assets');

// Servindo a pasta de assets
app.use('/assets', express.static(assetsPath));

const palestras = [
  { id: 1, title: "Atitude Eficiente o diferencial competitivo", description: "Descrição da palestra 1...", image: '/assets/Atitude Eficiente o diferencial competitivo.jpg' },
  { id: 2, title: "Cliente Interno", description: "Descrição da palestra 2...", image: '/assets/Cliente Interno.jpg' },
  { id: 3, title: "Comportamento Seguro", description: "Descrição da palestra 3...", image: '/assets/Comportamento Seguro.jpg' },
  { id: 4, title: "Excelência no Atendimento ao Cliente", description: "Descrição da palestra 4...", image: '/assets/Excelência no Atendimento ao Cliente.jpg' },
  { id: 5, title: "Gestão Consciente do Tempo", description: "Descrição da palestra 5...", image: '/assets/Gestão Consciente do Tempo.jpg' },
  { id: 6, title: "Gestão Financeira Pessoal", description: "Descrição da palestra 6...", image: '/assets/Gestão Financeira Pessoal.jpg' },
  { id: 7, title: "Inovação e Sustentabilidade", description: "Descrição da palestra 7...", image: '/assets/Inovação e Sustentabilidade.jpg' },
  { id: 8, title: "Mobilidade e Segurança no Trânsito", description: "Descrição da palestra 8...", image: '/assets/Mobilidade e Segurança no Trânsito.jpg' }
];

app.get('/api/palestras', (req, res) => {
  res.json(palestras);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
