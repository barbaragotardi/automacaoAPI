const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;