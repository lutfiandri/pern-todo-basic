const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoRoutes = require('./routes/todos');

app.use('/api/todos/', todoRoutes);

app.listen(PORT, () => `server running on port ${PORT}...`);
