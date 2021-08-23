const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CNN || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
    );
    console.log('DB Online');
    return 'DB Online';
  } catch (e) {
    console.error('Error init BD');
    return 'Error init DB';
  }
};

module.exports = dbConnection;
