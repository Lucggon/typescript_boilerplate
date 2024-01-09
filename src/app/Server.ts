
import express, {Express, Router as routerExpress} from 'express';
import * as http from 'http';

import { LoggerInitializer } from './config/logger/Logger.decorator';
import { Logger } from './config/logger/Logger.interface';

@LoggerInitializer
export class Server {
  private express: Express;
  private httpServer?: http.Server;
  private logger!:Logger;

  constructor() {
    this.express = express();
    const router = routerExpress();
    this.express.use(router);
  }

  getStatus(): string {
    return '';
  }

  listen():http.Server {
    this.logger.debug(this, 'start listen');
    this.httpServer = this.express.listen(8000, () => {});
    return this.httpServer;
  }

  stop() {
    if(this.httpServer) {
      this.httpServer.close();
    }
  }
}