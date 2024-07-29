import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import blogRoutes from './routes/blogRoutes';
import consultoriaRoutes from './routes/consultoriaRoutes';
import palestraRoutes from './routes/palestraRoutes';
import treinamentoRoutes from './routes/treinamentoRoutes';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/blog', blogRoutes);
app.use('/api/palestra', palestraRoutes);
app.use('/api/consultoria', consultoriaRoutes);
app.use('/api/treinamento', treinamentoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;
