import { Router } from 'express';
import { Container } from 'typedi';

import { Controller } from '../shared/controller.interface';
import { RouterRegister } from '../shared/routerRegister.interface';
import { StatusGetController } from './StatusGetController';

export class StatusRoutes implements RouterRegister {
  register(router: Router) {
    const controller: Controller = Container.get(StatusGetController);
    router.get('/status', (res, req) => {
      controller.execute(res, req);
    });
  }
}
