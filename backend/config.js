const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || '',
  // HUGGINGFACE_API_KEY is not exported for security; access directly from process.env in server.js
};
