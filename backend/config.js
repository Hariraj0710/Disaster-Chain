const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY || '',
  MONGODB_URI: process.env.MONGODB_URI || '',
};
