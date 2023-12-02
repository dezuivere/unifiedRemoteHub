const mongoose = require('mongoose');
const MongoURL = 'mongodb+srv://hack:hack123@cluster0.1q5ld9s.mongodb.net/Dashboard';

const mongoDB = async () => {
  try {
    await mongoose.connect(MongoURL, { useNewUrlParser: true });
    console.log('Connected to MongoDB successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = mongoDB;
