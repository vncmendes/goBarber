module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: '5432',
  username: 'postgres',
  password: 'password',
  database: 'gonodemdl2',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
