const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
  .once('open', () => console.log('connected'))
  .on('error', (err) => {
    console.warn('error', err);
  });
