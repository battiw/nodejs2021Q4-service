import winston from 'winston';

import expressWinston from 'express-winston';

const loggerInfo = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: './src/log/WinstonLog/infoWinston.log',
      level: process.env['LOG_LEVEL'],
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `${new Date()}`,
    }),
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  msg: 'service',
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
  colorize: true,
  ignoreRoute: function (_req, _res) {
    return false;
  },
});

export { loggerInfo };
