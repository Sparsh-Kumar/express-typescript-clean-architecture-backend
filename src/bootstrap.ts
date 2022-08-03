import 'dotenv/config';
import 'reflect-metadata';
import App from './app';

import './todo/todo.controller';

export default function bootstrap(): void {
  /* eslint-disable no-new */
  new App({
    defaultScope: 'Singleton',
  });
}

bootstrap();
