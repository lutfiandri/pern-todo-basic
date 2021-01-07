const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoRoutes = require('./routes/todos');

app.use('/api/todos/', todoRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
