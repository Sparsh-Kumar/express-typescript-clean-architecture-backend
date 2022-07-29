import 'dotenv/config';
import 'reflect-metadata';
import App from './app';

import './todo/todo.controller';

export default function bootstrap(): Promise<void> {
  return new App().setup();
}

bootstrap().then(() => {}).catch((e) => {
  console.log(e);
});
