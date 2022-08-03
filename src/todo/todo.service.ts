import { injectable } from 'inversify';
import { Todo } from 'src/database/types';
import CreateTaskDto from './dtos/createTaskDto';
import TodoRepository from './todo.repository';
import { LooseObject } from './types';

@injectable()
export default class TodoService {
  constructor(private readonly _todoRepo: TodoRepository) {}

  async getAll(filter: LooseObject): Promise<Todo[]> {
    return this._todoRepo.findAll(filter);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Todo> {
    return this._todoRepo.create(createTaskDto);
  }
}
