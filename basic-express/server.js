const express = require('express');
const app = express();

//import dotenv
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

const routes = require('./routes/index');
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});