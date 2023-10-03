import { injectable } from 'inversify';
import { Employee } from 'src/database/types';
import { LooseObject } from 'src/common/interfaces/loose-object';
import NotFoundException from 'src/exceptions/not-found-exception-handler';
import CreateEmployeeDto from './dtos/createEmployeeDto';
import EmployeeRepository from './employee.repository';
import EmployeeDto from './dtos/employeeDto';

@injectable()
export default class EmployeeService {
  constructor(private readonly _employeeRepo: EmployeeRepository) { }

  async getAll(filter: LooseObject): Promise<EmployeeDto[]> {
    const employees: Employee[] = await this._employeeRepo.findAll(filter);
    return employees.map((employee: Employee): EmployeeDto => EmployeeDto.from(employee));
  }

  async getOne(_id: string): Promise<EmployeeDto | null> {
    const employee: Employee = await this._employeeRepo.findOne({
      _id,
    });
    return employee ? EmployeeDto.from(employee) : null;
  }

  async deleteOne(_id: string): Promise<void> | never {
    const employee: EmployeeDto = await this.getOne(_id);
    if (!employee) throw new NotFoundException(`Employee with Id = ${_id} does not exist.`);
    await this._employeeRepo.deleteOne(_id);
  }

  async create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeDto> {
    const createdEmployee: Employee = await this._employeeRepo.create(createEmployeeDto);
    return EmployeeDto.from(createdEmployee);
  }
}
