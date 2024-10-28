const express = require('express');
const { openConnection } = require('./db.js');
const routerRestaurante = require('./router.js');

const app = express();

openConnection();

app.use(express.json());

app.use('/restaurantes', routerRestaurante);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});