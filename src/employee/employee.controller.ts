import { Request, Response } from 'express';
import {
  controller,
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
} from 'inversify-express-utils';
import ValidateRequestMiddleware from 'src/middlewares/validate-request-body-middleware';
import { LooseObject } from 'src/common/interfaces/loose-object';
import BaseHttpResponse from 'src/helpers/base-http-response';
import CreateEmployeeDto from './dtos/createEmployeeDto';
import EmployeeDto from './dtos/employeeDto';
import EmployeeService from './employee.service';
import UpdateEmployeeDto from './dtos/updateEmployeeDto';

@controller('/employees')
export default class EmployeeController {
  constructor(private readonly _employeeService: EmployeeService) { }

  @httpGet('/')
  async getAllEmployees(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> {
    const data: EmployeeDto[] = await this._employeeService.getAll({});
    const response: BaseHttpResponse = BaseHttpResponse.success(data, 200);
    return _res.status(response.statusCode).send(response);
  }

  @httpGet('/:id')
  async getParticularEmployee(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> {
    const data: EmployeeDto = await this._employeeService.getOne(_req.params.id);
    const response: BaseHttpResponse = BaseHttpResponse.success(data, 200);
    return _res.status(response.statusCode).send(response);
  }

  @httpDelete('/:id')
  async deleteParticularEmployee(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> | never {
    await this._employeeService.deleteOne(_req.params.id);
    const response: BaseHttpResponse = BaseHttpResponse.success({}, 200);
    return _res.status(response.statusCode).send(response);
  }

  @httpPost('/', ValidateRequestMiddleware.with(CreateEmployeeDto))
  async createNewEmployee(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> {
    const data: EmployeeDto = await this._employeeService.create(_req.body as CreateEmployeeDto);
    const response: BaseHttpResponse = BaseHttpResponse.success(data, 201);
    return _res.status(response.statusCode).send(response);
  }

  @httpPatch('/:id', ValidateRequestMiddleware.with(UpdateEmployeeDto))
  async updateEmployee(
    _req: Request,
    _res: Response,
  ): Promise<LooseObject> {
    const data: EmployeeDto = await this._employeeService.update(
      _req.params.id,
      _req.body as UpdateEmployeeDto,
    );
    const response: BaseHttpResponse = BaseHttpResponse.success(data, 200);
    return _res.status(response.statusCode).send(response);
  }
}
