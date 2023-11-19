import { Logger } from './Logger.interface';
import { WinstonLogger } from './WinstonLogger';

export function LoggerInitializer(target: any) {
  const logger: Logger = WinstonLogger.getInstance();
  target.prototype.logger = logger;
}
