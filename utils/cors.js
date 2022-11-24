const config = require('../config');
const cors = require('cors');

const whiteList = [config.cors.origin];  // Whitelist
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whiteList.some(dominio => dominio === origin);
    if (existe || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}

module.exports = corsOptions;
