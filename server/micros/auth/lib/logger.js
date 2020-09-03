const {createLogger, config, format, transports} = require('winston');
var projectName = require('../package.json').name;

const colorizer = format.colorize();

const winstonLogger = createLogger({
  levels: config.syslog.colors,
  format: format.json(),
  defaultMeta: {service: projectName},
});

winstonLogger.add(
  new transports.Console({
    format: format.combine(
      format.timestamp(),
      format.simple(),
      format.printf(msg =>
        colorizer.colorize(
          msg.level,
          `${msg.timestamp} - ${msg.level}: ${msg.message}`
        )
      )
    )
  })
);

export const logger = {
  debug: (message) => winstonLogger.log({message, level: 'debug'}),
  info: (message) => winstonLogger.log({message, level: 'info'}),
  notice: (message) => winstonLogger.log({message, level: 'notice'}),
  warning: (message) =>
    winstonLogger.log({message, level: 'warning'}),
  error: (message) => winstonLogger.log({message, level: 'error'}),
  crit: (message) => winstonLogger.log({message, level: 'crit'})
};