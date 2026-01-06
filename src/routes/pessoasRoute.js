import { Router } from 'express';
import PessoaController from '../controllers/PessoaController.js';


const pessoaController = new PessoaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

export default router;

