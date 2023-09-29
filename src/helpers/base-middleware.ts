import { Request, Response, NextFunction } from 'express';

export default abstract class BaseMiddleware {

  public abstract execute(
    _req: Request,
    _res: Response,
    _next: NextFunction
  ): void | Promise<void>;
}
