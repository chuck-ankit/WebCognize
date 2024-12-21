const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // Write logs to a file
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.Console(),
  ],
});

module.exports = logger;
