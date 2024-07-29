import { Router } from 'express';
import { addPalestra, deletePalestra, getPalestras, updatePalestra } from '../controllers/palestraController';

const router = Router();

// Adicionar nova palestra
router.post('/', addPalestra);

// Obter todas as palestras
router.get('/', getPalestras);

// Atualizar palestra
router.put('/:id', updatePalestra);

// Excluir palestra
router.delete('/:id', deletePalestra);

export default router;
