// mongo/db.js
const mongoose = require('mongoose');
const { dbUrl } = require('../config');     // ← ключ збігається

module.exports = () => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Successfully connected to db'))
  .catch(err => console.error('Mongo error:', err.message));
};
