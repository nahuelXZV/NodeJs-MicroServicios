const { User, UserSchema } = require('./userModel');
const { Auth, AuthSchema } = require('./authModel');

function setupModels(sequelize) {
  // setup models
  User.init(UserSchema, User.config(sequelize));
  Auth.init(AuthSchema, Auth.config(sequelize));

  // setup associations
  User.associate(sequelize.models);
  Auth.associate(sequelize.models);

}

module.exports = setupModels;
