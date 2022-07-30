import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  httpPost,
} from 'inversify-express-utils';
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
    const todos = await this._todoService.getAll({});
    return _res.status(200).send({
      status: 'success',
      data: {
        todos,
      },
    });
  }

  @httpPost('/')
  async createNewTask(
    _req: Request,
    _res: Response,
  ): Promise <LooseObject> {
    const todo = await this._todoService.create(_req.body);
    return _res.status(200).send({
      status: 'success',
      data: {
        todo
      }
    })
  }
}
