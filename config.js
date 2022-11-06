module.exports = {
    api: {
        port: process.env.API_PORT || 3010,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    }
}