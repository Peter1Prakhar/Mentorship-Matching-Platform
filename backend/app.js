const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Authentication Routes
app.use('/api/auth', authRoutes);

module.exports = app;
