import Controller from './Controller.js';
import MatriculaServices from '../services/MatriculaServices.js';

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async pegaTodos(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaDeRegistros = estudanteId
        ? await this.entidadeService.pegaRegistrosPorEstudante(estudanteId)
        : await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async pegaUm(req, res, next) {
    const { id, estudanteId } = req.params;
    try {
      const registro = await this.entidadeService.pegaUmRegistro(id);
      
      if (!registro) {
        return res.status(404).json({ mensagem: 'Matrícula não encontrada' });
      }

      if (estudanteId && registro.estudante_id !== Number(estudanteId)) {
        return res.status(403).json({ mensagem: 'Esta matrícula não pertence ao estudante informado' });
      }

      req.registro = registro;
      if (next) {
        return next();
      }
      return res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

}

export default MatriculaController;
