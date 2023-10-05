import { injectable } from 'inversify';
import { Employee } from 'src/database/types';
import { LooseObject } from 'src/common/interfaces/loose-object';
import DbService from '../database/db.service';
import CreateEmployeeDto from './dtos/createEmployeeDto';
import UpdateEmployeeDto from './dtos/updateEmployeeDto';

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

  async update(
    _id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const updateQuery: LooseObject = {};
    if (updateEmployeeDto.name) updateQuery.name = updateEmployeeDto.name;
    if (updateEmployeeDto.email) updateQuery.email = updateEmployeeDto.email;
    if (updateEmployeeDto.address) updateQuery.address = updateEmployeeDto.address;
    if (updateEmployeeDto.phone) updateQuery.phone = updateEmployeeDto.phone;
    await this._dbContext.employee.update(
      {
        _id,
      },
      {
        $set: updateQuery,
      },
      { new: true },
    );
    return this.findOne({ _id });
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
