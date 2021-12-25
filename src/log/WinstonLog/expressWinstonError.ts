import winston from 'winston'; // for tranport method

import expressWinston from 'express-winston';

const loggerError = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: './src/log/WinstonLog/errorWinston.log',
      level: 'error', // заменить на env
    }),
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});

export { loggerError };
