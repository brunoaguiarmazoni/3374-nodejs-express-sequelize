import database from '../models/index.js';

class PessoaController {
    static async getAllPessoas(req, res) {
        try {
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas);
        } catch (error) {
            console.error('Erro ao buscar pessoas:', error);
            return res.status(500).json({ error: 'Erro ao buscar pessoas', detalhes: error.message });
        }
    };

}

export default PessoaController;