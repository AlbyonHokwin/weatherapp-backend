const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:LzxZX6ayVZRqOGoh@cluster0.jfisqn5.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
