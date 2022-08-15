/* eslint-disable @typescript-eslint/no-floating-promises */
import { Container } from 'inversify';
import { ApplicationOptions } from './types';

export default abstract class Application {
  protected readonly _container: Container;

  constructor(options: ApplicationOptions) {
    this._container = new Container(options.containerOptions);
    this.configureService();
    this.setup(options);
  }
  abstract configureService(): void;
  abstract setup(options: ApplicationOptions): Promise<void>;
}
