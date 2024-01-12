import { Router } from 'express';

export abstract class RouterRegister {
  abstract register(router: Router): void;
}
