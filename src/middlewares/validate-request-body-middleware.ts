import {
  Request,
  Response,
  NextFunction,
} from 'express';
import { LooseObject } from 'src/common/interfaces/loose-object';
import BaseMiddleware from '../helpers/base-middleware';

export default class ValidateRequestMiddleware extends BaseMiddleware {
  private readonly _dtoClass: LooseObject;

  constructor(dtoClass: LooseObject) {
    super();
    this._dtoClass = dtoClass;
  }

  public execute(
    _req: Request,
    _res: Response,
    _next: NextFunction,
  ): void | Promise<void> {
    _req.body = <LooseObject> this._dtoClass.from(_req.body);
    _next();
  }

  public static with(dto: LooseObject) {
    return new ValidateRequestMiddleware(dto).execute;
  }
}
