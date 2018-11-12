const mongoose = require('mongoose');
const { User } = require('../models/user');

const seedDB = userData => {
  return mongoose.connection.dropDatabase().then(() => {
    return User.insertMany(userData);
  });
};

module.exports = seedDB;