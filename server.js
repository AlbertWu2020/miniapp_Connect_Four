const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log('Listen to PORT:' + PORT));
app.use(express.static('client/dist'));

