import winston from 'winston';

const { createLogger, format, transports } = winston;

// eslint-disable-next-line import/first
import { config } from '../../common/config';

const { ERROR_LEVEL, LOG_LEVEL, WARN_LEVEL } = config;

const logger = createLogger({
  level: 'silly',
  format: format.combine(format.colorize(), format.cli()),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: './src/log/WinstonLog/errorWinston.log',
      level: ERROR_LEVEL,
      format: format.combine(format.uncolorize(), format.json()),
    }),
    new transports.File({
      filename: './src/log/WinstonLog/infoWinston.log',
      level: LOG_LEVEL,
      format: format.combine(format.uncolorize(), format.json()),
    }),
    new transports.File({
      filename: './src/log/WinstonLog/warnWinston.log',
      level: WARN_LEVEL,
      format: format.combine(format.uncolorize(), format.json()),
    }),
  ],
});

export { logger };
