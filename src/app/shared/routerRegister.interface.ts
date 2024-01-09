import { Router } from 'express';

export interface RouterRegister {
  register(router: Router): void;
}
