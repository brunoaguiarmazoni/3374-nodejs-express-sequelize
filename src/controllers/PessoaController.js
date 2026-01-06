import Controller from './Controller.js';
import PessoaServices from '../services/PessoaServices.js';

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices);
  }

}

export default PessoaController;
