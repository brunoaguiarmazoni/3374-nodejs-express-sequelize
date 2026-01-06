import { Router } from 'express';
import PessoaController from '../controllers/PessoaController.js';
import MatriculaController from '../controllers/MatriculaController.js';


const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUm(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaRegistro(req, res));
router.put('/pessoas/:id', (req, res, next) => pessoaController.pegaUm(req, res, next), (req, res) => pessoaController.atualizaRegistro(req, res));
router.delete('/pessoas/:id', (req, res, next) => pessoaController.pegaUm(req, res, next), (req, res) => pessoaController.apagaRegistro(req, res));
router.get('/matriculas', (req, res) => matriculaController.pegaTodos(req, res));
router.get('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.pegaTodos(req, res));
router.get('/pessoas/:estudanteId/matriculas/:id', (req, res) => matriculaController.pegaUm(req, res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criaRegistro(req, res));
router.put('/pessoas/:estudanteId/matriculas/:id', (req, res, next) => matriculaController.pegaUm(req, res, next), (req, res) => matriculaController.atualizaRegistro(req, res));
router.delete('/pessoas/:estudanteId/matriculas/:id', (req, res, next) => matriculaController.pegaUm(req, res, next), (req, res) => matriculaController.apagaRegistro(req, res));

export default router;

