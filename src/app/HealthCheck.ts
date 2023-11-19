import { LoggerInitializer } from './config/logger/Logger.decorator';
import { Logger } from './config/logger/Logger.interface';

@LoggerInitializer
export class HealthCheck {
  private status: boolean = false;
  private logger!: Logger;
  constructor() {
    this.status = true;
  }

  getStatus(): boolean {
    this.logger.debug(this, 'getStatus');
    return this.status;
  }
}
