import 'dotenv/config';
import 'reflect-metadata';
import App from './app';

import './todo/todo.controller';
import { ApplicationOptions, MorganLoggingTypes } from './helpers/types';

export default function bootstrap(): void {
  const applicationOpts: ApplicationOptions = {
    containerOptions: {
      defaultScope: 'Singleton',
    },
    morganConfig: {
      format: MorganLoggingTypes.COMBINED,
    },
  };
  /* eslint-disable no-new */
  new App(applicationOpts);
}

bootstrap();
