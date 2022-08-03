import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import DbService from './database/db.service';
import Application from './helpers/abstract-application';
import TodoRepository from './todo/todo.repository';
import TodoService from './todo/todo.service';

export default class App extends Application {
  private _db: DbService;

  configureService(): void {
    this._container.bind(DbService).toSelf();
    this._container.bind(TodoService).toSelf();
    this._container.bind(TodoRepository).toSelf();
  }

  async setup(): Promise<void> {
    this._db = this._container.get(DbService);
    await this._db.connect();
    const server: InversifyExpressServer = new InversifyExpressServer(this._container);
    server.setConfig((app) => {
      app.use(express.json());
    });
    const app = server.build();
    app.listen(process.env.PORT, () => {
      console.log(process.env.WEB_APP_HOST);
    });
  }
}
