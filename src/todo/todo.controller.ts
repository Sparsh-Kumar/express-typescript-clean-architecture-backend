import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import { Todo } from 'src/database/types';
import CreateTaskDto from './dtos/createTaskDto';
import TaskDto from './dtos/taskDto';
import TodoService from './todo.service';
import { LooseObject } from './types';

@controller('/todos')
export default class TodoController {
  constructor(private readonly _todoService: TodoService) {}

  @httpGet('/')
  async getAllTasks(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> {
    const todos: Todo[] = await this._todoService.getAll({});
    const data: TaskDto[] = todos.map((todo: Todo): TaskDto => TaskDto.from(todo));
    return _res.status(200).send({
      status: 'success',
      data,
    });
  }

  @httpPost('/')
  async createNewTask(
    _req: Request,
    _res: Response,
  ): Promise <LooseObject> {
    const request: CreateTaskDto | never = CreateTaskDto.from(_req.body as Partial<Todo>);
    const todo: Todo = await this._todoService.create(request);
    const data: TaskDto = TaskDto.from(todo);
    return _res.status(200).send({
      status: 'success',
      data,
    });
  }
}
