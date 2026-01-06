import datasource from '../models/index.js';

class Services {
  constructor(nomeDomodel) {
    this.model = nomeDomodel;
  }

  async pegaTodosOsRegistros() {
    return await datasource[this.model].findAll();
  }
}

export default Services;
