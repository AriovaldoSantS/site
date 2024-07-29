import { Request, Response } from 'express';

// Mock de dados (substitua por uma solução real, como um banco de dados)
let palestras: Array<any> = [];

// Adicionar palestra
export const addPalestra = (req: Request, res: Response) => {
  const { title, text, image } = req.body;
  const newPalestra = { id: Date.now(), title, text, image };
  palestras.push(newPalestra);
  res.status(201).json(newPalestra);
};

// Obter todas as palestras
export const getPalestras = (req: Request, res: Response) => {
  res.json(palestras);
};

// Atualizar palestra
export const updatePalestra = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, text, image } = req.body;
  const palestraIndex = palestras.findIndex(p => p.id === parseInt(id, 10));
  if (palestraIndex !== -1) {
    palestras[palestraIndex] = { id: parseInt(id, 10), title, text, image };
    res.json(palestras[palestraIndex]);
  } else {
    res.status(404).json({ message: 'Palestra não encontrada' });
  }
};

// Excluir palestra
export const deletePalestra = (req: Request, res: Response) => {
  const { id } = req.params;
  palestras = palestras.filter(p => p.id !== parseInt(id, 10));
  res.status(204).send();
};
