import { Router } from 'express';
import CursoController from '../controllers/CursoController.js';

const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegaUm(req, res));
router.post('/cursos', (req, res) => cursoController.criaRegistro(req, res));
router.put('/cursos/:id', (req, res, next) => cursoController.pegaUm(req, res, next), (req, res) => cursoController.atualizaRegistro(req, res));
router.delete('/cursos/:id', (req, res, next) => cursoController.pegaUm(req, res, next), (req, res) => cursoController.apagaRegistro(req, res));

export default router;

