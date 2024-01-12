import { Router } from 'express';

import { Controller } from '../shared/controller.interface';
import { RouterRegister } from '../shared/routerRegister.interface';

export class StatusRoutes implements RouterRegister {
  private controller!: Controller;

  constructor(controller: Controller) {
    this.controller = controller;
  }

  register(router: Router) {
    router.get('/status', (res, req) => {
      this.controller.execute(res, req);
    });
  }
}
