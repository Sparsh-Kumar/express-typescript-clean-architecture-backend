import morgan from 'morgan';
import cors, { CorsOptions } from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import DbService from './database/db.service';
import Application from './helpers/abstract-application';
import TodoRepository from './todo/todo.repository';
import TodoService from './todo/todo.service';
import ValidationException from './exceptions/validation-exception-handler';
import HttpException from './exceptions/http-exception-handler';
import BaseHttpResponse from './helpers/base-http-response';
import { ApplicationOptions } from './helpers/types';
import EmployeeRepository from './employee/employee.repository';
import EmployeeService from './employee/employee.service';
import NotFoundException from './exceptions/not-found-exception-handler';

export default class App extends Application {
  private _db: DbService;

  configureService(): void {
    this._container.bind(DbService).toSelf();
    this._container.bind(TodoService).toSelf();
    this._container.bind(TodoRepository).toSelf();
    this._container.bind(EmployeeService).toSelf();
    this._container.bind(EmployeeRepository).toSelf();
  }

  async setup(options: ApplicationOptions): Promise<void> {
    const corsOptions: CorsOptions = {};
    this._db = this._container.get(DbService);
    await this._db.connect();
    const server: InversifyExpressServer = new InversifyExpressServer(this._container);
    server.setConfig((app) => {
      app.use(express.json());
      app.use(morgan(options.morganConfig.format));
      app.use(cors(corsOptions));
    });
    server.setErrorConfig((app) => {
      app.use((
        _err: HttpException | ValidationException | Error,
        _req: Request,
        _res: Response,
        _next: NextFunction,
      ) => {
        if (_err instanceof ValidationException || _err instanceof NotFoundException) {
          const response: BaseHttpResponse = BaseHttpResponse.failure(
            _err.message,
            _err.statusCode,
          );
          return _res.status(response.statusCode).json(response);
        }

        if (_err instanceof Error) {
          const response: BaseHttpResponse = BaseHttpResponse.failure(
            _err.message,
          );
          return _res.status(response.statusCode).json(response);
        }
        return _next();
      });
    });
    const app = server.build();
    app.listen(process.env.PORT, () => {
      console.log(process.env.WEB_APP_HOST);
    });
  }
}
