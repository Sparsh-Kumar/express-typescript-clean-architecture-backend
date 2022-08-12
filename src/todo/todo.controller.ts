import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
import ValidateRequestMiddleware from 'src/middlewares/validate-request-body-middleware';
import { LooseObject } from 'src/common/interfaces/loose-object';
import BaseHttpResponse from 'src/helpers/base-http-response';
import CreateTaskDto from './dtos/createTaskDto';
import TaskDto from './dtos/taskDto';
import TodoService from './todo.service';

@controller('/todos')
export default class TodoController {
  constructor(private readonly _todoService: TodoService) {}

  @httpGet('/')
  async getAllTasks(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> {
    const data: TaskDto[] = await this._todoService.getAll({});
    const response: BaseHttpResponse = BaseHttpResponse.success(data, 200);
    return _res.status(response.statusCode).send(response);
  }

  @httpPost('/', ValidateRequestMiddleware.with(CreateTaskDto))
  async createNewTask(
    _req: Request,
    _res: Response,
  ): Promise <LooseObject> {
    const data: TaskDto = await this._todoService.create(_req.body);
    const response: BaseHttpResponse = BaseHttpResponse.success(data, 201);
    return _res.status(response.statusCode).send(response);
  }
}
