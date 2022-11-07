// models
const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./userModel');

const AUTH_TABLE = 'auth';

const AuthSchema = {
    id: {
        allowNull: false, // not null
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    recoveryToken: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'recovery_token'
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'public'
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

class Auth extends Model {
    static associate(models) {
        // associations can be defined here
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: AUTH_TABLE,
            modelName: 'Auth',
            timestamps: false
        }
    }
}


module.exports = { AUTH_TABLE, AuthSchema, Auth }
