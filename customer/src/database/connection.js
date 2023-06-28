const mongoose = require('mongoose');
const { DB_URL } = require('../config');

// const DB_URL = process.env.MONGODB_URI;

module.exports = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ewallet', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Db Connected');
  } catch (error) {
    console.log('Error ============');
    console.log(error);
    process.exit(1);
  }
};

// var MongoClient = require('mongodb').MongoClient;
// var dburl = 'mongodb://localhost:27017/test';
// MongoClient.connect(dburl, function (err, db) {
//   if (err) {
//     throw err;
//   }
//   console.log('db connected');
//   db.close();
// });
