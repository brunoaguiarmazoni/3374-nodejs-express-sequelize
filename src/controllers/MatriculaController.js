import Controller from './Controller.js';
import MatriculaServices from '../services/MatriculaServices.js';

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

}

export default MatriculaController;
