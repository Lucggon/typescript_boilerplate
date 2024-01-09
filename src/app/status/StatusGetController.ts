import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Service } from 'typedi';

import { Controller } from '../shared/controller.interface';

@Service()
export class StatusGetController implements Controller {
  public async execute(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send();
  }
}
