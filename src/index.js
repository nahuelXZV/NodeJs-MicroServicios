// libs
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

// project files
const config = require('../config');
const user = require('./services/user/network');
const auth = require('./services/auth/network');
const errors = require('../network/errors');
const corsOptions = require('../utils/cors');

// init express
const app = express();
const swaggerDoc = require('./swagger.json');

const port = config.api.port;
app.use(bodyParser.json());
app.use(cors(corsOptions)); // Enable CORS

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/user', user);
app.use('/api/auth', auth);

// Error handler
app.use(errors);

app.listen(port, () =>
    console.log(`${config.api.name} listening on port ${config.api.url}`)
);