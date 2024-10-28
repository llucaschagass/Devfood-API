const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './delivery.db'
});

async function openConnection(){
  try{
    await sequelize.authenticate();
    sequelize.sync({ force: true });
    console.log('Conectado com o banco de dados')
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  }
}

module.exports = {
  sequelize,
  openConnection
}