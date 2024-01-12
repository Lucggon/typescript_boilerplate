import express, { Express, Router as routerExpress } from 'express';
import * as http from 'http';

import { getRoutes } from './config/dependency-injection/register-routes';
import { LoggerInitializer } from './config/logger/Logger.decorator';
import { Logger } from './config/logger/Logger.interface';

@LoggerInitializer
export class Server {
  private express: Express;
  private httpServer!: http.Server;
  private logger!: Logger;

  constructor() {
    this.express = express();
    const router = routerExpress();
    this.express.use(router);
    getRoutes().forEach((route) => route.register(router));
  }

  getStatus(): string {
    return '';
  }

  listen(): Promise<void> {
    return new Promise((resolve) => {
      this.logger.debug(this, 'start listen');
      this.httpServer = this.express.listen(8000, () => {
        resolve();
      });
    });
  }

  getHttpServer(): http.Server {
    return this.httpServer;
  }
  stop() {
    if (this.httpServer) {
      this.httpServer.close();
    }
  }
}
