import winston from 'winston';

const { createLogger, format, transports } = winston;

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: './src/log/WinstonLog/errorWinston.log',
      level: 'error',
      format: format.combine(format.uncolorize(), format.json()),
    }),
    new transports.File({
      filename: './src/log/WinstonLog/infoWinston.log',
      level: 'info',
      format: format.combine(format.uncolorize(), format.json()),
    }),
  ],
});

export { logger };
