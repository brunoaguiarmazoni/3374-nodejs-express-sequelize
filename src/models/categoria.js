import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Curso, 
        { foreignKey: 'categoria_id' });
    }
  }
  Categoria.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias'
  });
  return Categoria;
};