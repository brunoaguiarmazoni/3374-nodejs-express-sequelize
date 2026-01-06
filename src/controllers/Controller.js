class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros =
        await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async pegaUm(req, res, next) {
    const { id } = req.params;
    try {
      const registro = await this.entidadeService.pegaUmRegistro(id);
      req.registro = registro;
      if (next) {
        return next();
      }
      return res.status(200).json(registro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async criaRegistro(req, res) {
    const dados = req.body;
    try {
      const novoRegistro = await this.entidadeService.criaRegistro(dados);
      return res.status(201).json(novoRegistro);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async atualizaRegistro(req, res) {
    const dados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dados,
        req.registro.id
      );
      if (!foiAtualizado) {
        return res
          .status(404)
          .json({ mensagem: 'registro não foi atualizado' });
      }
      return res
        .status(200)
        .json({ mensagem: 'registro atualizado com sucesso' });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  async apagaRegistro(req, res) {
    try {
      await this.entidadeService.apagaRegistro(req.registro.id);
      return res.status(200).json({ mensagem: 'registro apagado com sucesso' });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

export default Controller;
