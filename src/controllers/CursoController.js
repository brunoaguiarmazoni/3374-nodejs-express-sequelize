import Controller from './Controller.js';
import CursoServices from '../services/CursoServices.js';

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

}

export default CursoController;
