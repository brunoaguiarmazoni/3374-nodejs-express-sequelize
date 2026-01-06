import datasource from '../models/index.js';

class Services {
  constructor(nomeDomodel) {
    this.model = nomeDomodel;
  }

  async pegaTodosOsRegistros() {
    return await datasource[this.model].findAll();
  }

  async pegaUmRegistro(id) {
    return await datasource[this.model].findByPk(id);
  }

  async criaRegistro(dados) {
    return await datasource[this.model].create(dados);
  }

  async atualizaRegistro(dados, id) {
    const listaDeRegistrosAtualizados = datasource[this.model].update(dados, {
      where: { id: id },
    });
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async apagaRegistro(id) {
    return await datasource[this.model].destroy({ where: { id: id } });
  }
}

export default Services;
