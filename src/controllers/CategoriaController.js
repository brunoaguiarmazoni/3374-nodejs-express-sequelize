import Controller from './Controller.js';
import CategoriaServices from '../services/CategoriaServices.js';

const categoriaServices = new CategoriaServices();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaServices);
  }

}

export default CategoriaController;
