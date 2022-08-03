import { Request, Response, NextFunction } from 'express';
import BaseMiddleware from '../../helpers/base-middleware';

export default class ValidateRequestMiddleware extends BaseMiddleware {
  public execute(
    _req: Request,
    _res: Response,
    _next: NextFunction,
  ): void | Promise<void> {
    /* eslint-disable no-param-reassign */
    _req.body = this._dtoClass.from(_req.body);
    _next();
  }

  static with(dto: any): Function {
    return new ValidateRequestMiddleware(dto).execute;
  }
}
