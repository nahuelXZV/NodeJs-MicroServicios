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

const port = config.api.port;
app.use(bodyParser.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/user', user);
app.use('/api/auth', auth);

// Error handler
app.use(errors);

app.listen(port, () =>
    console.log(`${config.api.name} listening on port ${config.api.url}`)
);