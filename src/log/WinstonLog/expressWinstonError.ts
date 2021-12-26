import winston from 'winston';

import expressWinston from 'express-winston';

const loggerError = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: './src/log/WinstonLog/errorWinston.log',
      level: process.env['ERROR_LEVEL'],
    }),
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
});

export { loggerError };
