import { injectable } from 'inversify';
import { Todo } from 'src/database/types';
import DbService from '../database/db.service';
import CreateTaskDto from './dtos/createTaskDto';
import { LooseObject, TodoStatus } from './types';

@injectable()
export default class TodoRepository {
  constructor(private readonly _dbContext: DbService) {}

  async findAll(
    filter: LooseObject,
  ): Promise<Todo[]> {
    return this._dbContext.todo.find(filter);
  }

  async create(
    createTaskDto: CreateTaskDto,
  ): Promise<Todo> {
    return this._dbContext.todo.create({
      account: createTaskDto.account,
      description: createTaskDto.description,
      status: TodoStatus.IN_PROGRESS,
    });
  }
}
