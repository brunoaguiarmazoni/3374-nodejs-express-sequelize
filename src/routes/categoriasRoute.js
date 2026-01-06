import { Router } from 'express';
import CategoriaController from '../controllers/CategoriaController.js';


const categoriaController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriaController.pegaUm(req, res));
router.post('/categorias', (req, res) => categoriaController.criaRegistro(req, res));
router.put('/categorias/:id', (req, res, next) => categoriaController.pegaUm(req, res, next), (req, res) => categoriaController.atualizaRegistro(req, res));
router.delete('/categorias/:id', (req, res, next) => categoriaController.pegaUm(req, res, next), (req, res) => categoriaController.apagaRegistro(req, res));

export default router;

