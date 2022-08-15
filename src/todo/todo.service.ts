import { injectable } from 'inversify';
import { Todo } from 'src/database/types';
import { LooseObject } from 'src/common/interfaces/loose-object';
import CreateTaskDto from './dtos/createTaskDto';
import TaskDto from './dtos/taskDto';
import TodoRepository from './todo.repository';

@injectable()
export default class TodoService {
  constructor(private readonly _todoRepo: TodoRepository) {}

  async getAll(filter: LooseObject): Promise<TaskDto[]> {
    const todos: Todo[] = await this._todoRepo.findAll(filter);
    return todos.map((todo: Todo): TaskDto => TaskDto.from(todo));
  }

  async create(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const createdTodo: Todo = await this._todoRepo.create(createTaskDto);
    return TaskDto.from(createdTodo);
  }
}
