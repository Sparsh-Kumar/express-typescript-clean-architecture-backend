import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import DbService from './database/db.service';
import container from './dicontainer/container';
import Application from './helpers/abstract-application';

export default class App extends Application {
  private _db: DbService;

  async setup(): Promise<void> {
    this._db = container.get(DbService);
    await this._db.connect();
    const server: InversifyExpressServer = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.use(express.json());
    });
    const app = server.build();
    app.listen(process.env.PORT, () => {
      console.log(process.env.WEB_APP_HOST);
    });
  }
}
