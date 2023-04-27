// Imports
const express = require('express');
const morgan = require('morgan');

// Imports Routes
const characterRoutes = require('./routes/character.routes');

// Execution express
const server = express();

// Middlewares
server.use(express.json());
server.use(morgan('dev'));

// Using Routes
server.use('/rickandmorty/character', characterRoutes);



server.listen(3001, () => console.log('Server listen on port 3001'));