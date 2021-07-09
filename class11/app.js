const express = require('express');
const app = express();
// carga las variables de ambiente
require('dotenv').config();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on ${HOSTNAME}:${PORT}`);
})