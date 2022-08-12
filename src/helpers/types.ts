import { interfaces } from 'inversify';
import { LooseObject } from 'src/common/interfaces/loose-object';

export enum MorganLoggingTypes {
  DEV = 'dev',
  COMBINED = 'combined',
  COMMON = 'common',
  TINY = 'tiny',
  SHORT = 'short',
}

export type MorganConfig = {
  format: MorganLoggingTypes,
  options?: LooseObject,
};

export type ApplicationOptions = {
  containerOptions: interfaces.ContainerOptions;
  morganConfig: MorganConfig;
};
