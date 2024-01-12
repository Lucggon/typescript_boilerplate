import { createLogger, format, Logger as LoggerWinston, transports } from 'winston';

import { Logger } from './Logger.interface';
import { LogLevels } from './Logger.types';

export class WinstonLogger implements Logger {
  private logger!: LoggerWinston;
  private static instance: WinstonLogger;

  private constructor() {
    this.logger = WinstonLogger.initialiceLog();
  }

  private static initialiceLog(): LoggerWinston {
    return createLogger({
      level: process.env.LOG_LEVEL,

      transports: [new transports.Console()],
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.splat(),
        format.printf(({ timestamp, level, message }) => {
          return `[${level}]-[${timestamp}]: ${message}`;
        }),
      ),
    });
  }

  public static getInstance() {
    if (!WinstonLogger.instance) {
      WinstonLogger.instance = new WinstonLogger();
    }
    return WinstonLogger.instance;
  }

  private log(log: LogLevels, callerClass: object, message: string) {
    this.logger[log](`[${callerClass?.constructor.name}] %s`, message);
  }

  public debug(callerClass: object, message: string) {
    this.log('debug', callerClass, message);
  }

  public info(callerClass: object, message: string) {
    this.log('info', callerClass, message);
  }

  public error(callerClass: object, message: string) {
    this.log('error', callerClass, message);
  }
}
