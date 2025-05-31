// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./mongo/db')();                 // підключення до Mongo
require('./api/routes/lot.routes')(app);
require('./api/routes/make.routes')(app);

// ---- Головна зміна ↓
const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`listening on ${PORT}`));
