import { Request, Response, NextFunction } from 'express';

export default abstract class BaseMiddleware {
  protected _dtoClass: any;

  constructor(dtoClass: any) {
    this._dtoClass = dtoClass;
    this.execute = this.execute.bind(this); // To understand this line
  }

  abstract execute(
    _req: Request,
    _res: Response,
    _next: NextFunction
  ): void | Promise<void>;
}
