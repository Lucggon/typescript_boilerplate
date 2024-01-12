import { Request, Response } from 'express';

export abstract class Controller {
  abstract execute(req: Request, res: Response): Promise<void>;
}

export const HttpController = (): ClassDecorator => {
  return <TFunction extends Function>(target: TFunction): TFunction => {
    return target;
  };
};
