import { injectable } from 'inversify';
import DbService from '../database/db.service';
import { LooseObject } from './types';

@injectable()
export default class TodoRepository {
  constructor(private readonly _dbContext: DbService) {}

  async findAll(
    filter: LooseObject,
  ): Promise <LooseObject> {
    return this._dbContext.todo.find(filter);
  }
}
