import { injectable } from 'inversify';
import { Employee } from 'src/database/types';
import { LooseObject } from 'src/common/interfaces/loose-object';
import DbService from '../database/db.service';
import CreateEmployeeDto from './dtos/createEmployeeDto';

@injectable()
export default class EmployeeRepository {
  constructor(private readonly _dbContext: DbService) { }

  async findAll(
    filter: LooseObject,
  ): Promise<Employee[]> {
    return this._dbContext.employee.find(filter);
  }

  async findOne(
    filter: LooseObject,
  ): Promise<Employee> {
    return this._dbContext.employee.findOne(filter);
  }

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this._dbContext.employee.create({
      name: createEmployeeDto.name,
      email: createEmployeeDto.email,
      address: createEmployeeDto.address,
      phone: createEmployeeDto.phone,
    });
  }

  async deleteOne(
    _id: string,
  ): Promise<void> {
    await this._dbContext.employee.deleteOne(
      {
        _id,
      },
    );
  }
}
