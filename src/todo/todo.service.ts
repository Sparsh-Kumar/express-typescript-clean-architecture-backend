import { injectable } from 'inversify';
import TodoRepository from './todo.repository';
import { LooseObject } from './types';

@injectable()
export default class TodoService {
  constructor(private readonly _todoRepo: TodoRepository) {}

  async getAll(filter: LooseObject): Promise<LooseObject> {
    return this._todoRepo.findAll(filter);
  }
}
