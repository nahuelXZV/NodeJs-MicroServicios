require("dotenv").config();

module.exports = {
    api: {
        port: process.env.API_PORT || 3010,
        host: process.env.API_HOST || "localhost",
        url: process.env.API_URL || "http://localhost:3010",
        name: process.env.API_NAME || "API",
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    sequelize: {
        database: process.env.DB_DATABASE || 'db',
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'root',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_CONNECTION || 'mysql',
    },
    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3010',
    }
}