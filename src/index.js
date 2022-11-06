// libs
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

// project files
const config = require('../config');
const user = require('./services/user/network');
const auth = require('./services/auth/network');
const errors = require('../network/errors');

// init express
const app = express();
const swaggerDoc = require('./swagger.json');

app.use(bodyParser.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/user', user);
app.use('/api/auth', auth);

// Error handler
app.use(errors);

app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto http://localhost:' + config.api.port + '/api-docs');
});