require('dotenv').config();
// Imports
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// Import routes
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/pokemon', pokemonRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
