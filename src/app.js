const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger');
const userRoutes = require('./routes/userRoutes');
const temperatureRoutes = require('./routes/temperatureRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/temperature', temperatureRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;