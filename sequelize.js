var Sequelize = require('sequelize'),
    sequelize = new Sequelize('users', 'aadi', 'adi', {
      host: 'localhost',
      dialect: 'mysql',
      pool: {
        min: 0,
        max: 5,
      }  
    }) 

module.exports = sequelize

