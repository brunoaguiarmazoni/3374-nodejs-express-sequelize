import Services from './Services.js';
import datasource from '../models/index.js';

class MatriculaServices extends Services {
  constructor() {
    super('Matricula');
  }

  async pegaRegistrosPorEstudante(estudanteId) {
    return await datasource[this.model].findAll({
      where: { estudante_id: estudanteId }
    });
  }
}

export default MatriculaServices;