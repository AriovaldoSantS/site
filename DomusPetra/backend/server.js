const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const app = express();
const port = 3001;

// Configuração do banco de dados
let db;

const initializeDatabase = async () => {
  db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  // Criar tabelas se não existirem
  await db.exec(`
    CREATE TABLE IF NOT EXISTS consultoria (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS treinamentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS palestras (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `);

  // Adicionar dados de exemplo se as tabelas estiverem vazias
  const consultoriaCount = await db.get('SELECT COUNT(*) AS count FROM consultoria');
  if (consultoriaCount.count === 0) {
    await db.exec(`
      INSERT INTO consultoria (title, description) VALUES 
      ('Consultoria Estratégica', 'Consultoria para empresas que buscam melhorar sua estratégia de negócios.'),
      ('Consultoria em Marketing', 'Consultoria especializada em estratégias de marketing digital.');
    `);
  }

  const treinamentosCount = await db.get('SELECT COUNT(*) AS count FROM treinamentos');
  if (treinamentosCount.count === 0) {
    await db.exec(`
      INSERT INTO treinamentos (title, description) VALUES 
      ('Treinamento de Gestão de Projetos', 'Aperfeiçoe suas habilidades em gestão de projetos com técnicas comprovadas.'),
      ('Treinamento em Comunicação Eficaz', 'Desenvolva habilidades para uma comunicação mais clara e eficiente.');
    `);
  }

  const palestrasCount = await db.get('SELECT COUNT(*) AS count FROM palestras');
  if (palestrasCount.count === 0) {
    await db.exec(`
      INSERT INTO palestras (title, description) VALUES 
      ('Palestra sobre Transformação Digital', 'Como a transformação digital está moldando o futuro dos negócios.'),
      ('Palestra sobre Liderança Inspiradora', 'Como ser um líder inspirador e motivar sua equipe.');
    `);
  }
};

// Middleware
app.use(express.json());

// Rota para todas as categorias
app.get('/api/:category', async (req, res) => {
  const { category } = req.params;

  if (!['consultoria', 'treinamentos', 'palestras'].includes(category)) {
    return res.status(400).json({ error: 'Categoria inválida.' });
  }

  try {
    const items = await db.all(`SELECT * FROM ${category}`);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar dados de ${category}` });
  }
});

// Inicializar o banco de dados e iniciar o servidor
initializeDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});
