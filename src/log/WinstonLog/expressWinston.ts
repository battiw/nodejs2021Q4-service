import winston from 'winston'; // for transport method

import expressWinston from 'express-winston';

import { config } from '../../common/config';

const { LOG_LEVEL, WARN_LEVEL } = config;

const loggerInfo = expressWinston.logger({
  statusLevels: false,
  level: function (_req, res) {
    let level = '';
    if (res.statusCode >= 100 && res.statusCode < 400) {
      level = LOG_LEVEL || 'info';
      console.log('INFO');
    }
    if (res.statusCode >= 400 && res.statusCode < 500) {
      level = WARN_LEVEL || 'warn';
      console.log('WARN');
    }
    // if (res.statusCode >= 500) {
    //   level = ERROR_LEVEL || 'error';
    //   console.log('ERROR');
    // }
    return level;
  },
  transports: [
    new winston.transports.File({
      filename: './src/log/WinstonLog/infoWinston.log',
      level: 'info',
    }),
    new winston.transports.File({
      filename: './src/log/WinstonLog/warnWinston.log',
      level: 'warn',
    }),
    // new winston.transports.Console(),
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
  // msg: 'AUTHORIZEDROUTER: HTTP {{req.method}} {{req.url}} {{statusCode}}',

  msg: 'service',
  // label: 'fdk',
  responseWhitelist: [
    'body',
    'statusCode',
    'statusMessage',
    'headers',
    'url',
    'headers',
    'method',
    'httpVersion',
    'originalUrl',
    'query',
  ],
  requestWhitelist: [
    'hostname',
    'ip',
    'method',
    'secure',
    'protocol',
    'path',
    'url',
    'query',
    'headers',
  ],
  metaField: null,
  expressFormat: true,
  // colorize: true,
  ignoreRoute: function (_req, _res) {
    return false;
  },
});

export { loggerInfo };
