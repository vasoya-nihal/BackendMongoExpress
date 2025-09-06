const monoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
  const conn = await monoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, 
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  } 

};

module.exports = connectDB;