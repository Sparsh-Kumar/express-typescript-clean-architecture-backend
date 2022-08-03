import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import CreateTaskDto from './dtos/createTaskDto';
import TaskDto from './dtos/taskDto';
import ValidateRequestMiddleware from './middleware/validate-request-middleware';
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
    const data: TaskDto[] = await this._todoService.getAll({});
    return _res.status(200).send({
      status: 'success',
      data,
    });
  }

  @httpPost('/', ValidateRequestMiddleware.with(CreateTaskDto))
  async createNewTask(
    _req: Request,
    _res: Response,
  ): Promise <LooseObject> {
    const data:TaskDto = await this._todoService.create(_req.body as CreateTaskDto);
    return _res.status(200).send({
      status: 'success',
      data,
    });
  }
}
