import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Pessoa extends Model {

    static associate(models) {
      Pessoa.hasMany(models.Curso, 
        { foreignKey: 'docente_id' });
      Pessoa.hasMany(models.Matricula, 
        { foreignKey: 'estudante_id' });

    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.ENUM('estudante', 'docente', 'admin')
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas'
  });
  return Pessoa;
};