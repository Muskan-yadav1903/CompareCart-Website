const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/comparecart', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
