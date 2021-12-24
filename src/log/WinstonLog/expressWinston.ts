import winston from 'winston'; // for tranport method

import expressWinston from 'express-winston';

const loggerInfo = expressWinston.logger({
  statusLevels: false,
  level: function (_req, res) {
    let level = '';
    if (res.statusCode >= 100) {
      level = 'info';
      console.log('INFO');
    }
    if (res.statusCode >= 400) {
      level = 'warn';
      console.log('WARN');
    }
    if (res.statusCode >= 404) {
      level = 'error';
      console.log('ERROR');
    }
    return level;
  },
  transports: [
    new winston.transports.File({
      filename: './src/log/WinstonLog/infoWinston.log',
      level: 'info',
    }),
    new winston.transports.File({
      filename: './src/log/WinstonLog/errorWinston.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './src/log/WinstonLog/warnWinston.log',
      level: 'warn',
    }),
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `${new Date()}`,
    }),
    winston.format.colorize(),
    winston.format.json()
  ),

  // level: 'info',
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}} {{statusCode}}',
  expressFormat: true,
  colorize: true,
  ignoreRoute: function (_req, _res) {
    return false;
  },
});

export { loggerInfo };
