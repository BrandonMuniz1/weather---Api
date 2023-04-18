const path = require('path');
const express = require('express');
const routes = require('./routes');
const {errorMiddleware} = require('./middleware');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

routes(app);

app.use(errorMiddleware);

module.exports = app;


app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`))